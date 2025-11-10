<?php
/**
 * Plugin Name: RVB – Éditeur Carte des Soins
 * Description: Édite le fichier HTML de la carte des soins depuis l'administration WordPress en s'appuyant sur le répertoire uploads (persistant).
 * Version: 1.0.0
 * Author: RVB
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Returns an array with the persistent storage directory and file path.
 *
 * @return array{dir:string,file:string}
 */
function rvb_carte_editor_paths() {
    static $paths = null;

    if (null === $paths) {
        $uploads = wp_upload_dir(null, false);
        $dir = trailingslashit($uploads['basedir']) . 'rvb-spa';
        $paths = [
            'dir'  => $dir,
            'file' => $dir . '/carte-2025.html',
        ];
    }

    return $paths;
}

/**
 * Provides access to the WordPress filesystem abstraction.
 *
 * @return WP_Filesystem_Base|null
 */
function rvb_carte_editor_fs() {
    static $filesystem = null;

    if (null !== $filesystem) {
        return $filesystem;
    }

    require_once ABSPATH . 'wp-admin/includes/file.php';

    if (!WP_Filesystem()) {
        return null;
    }

    global $wp_filesystem;
    $filesystem = $wp_filesystem;

    return $filesystem;
}

/**
 * Ensures the storage directory and file exist.
 */
function rvb_carte_editor_bootstrap_storage() {
    $paths = rvb_carte_editor_paths();
    $fs = rvb_carte_editor_fs();

    if (!$fs) {
        return;
    }

    if (!$fs->is_dir($paths['dir'])) {
        wp_mkdir_p($paths['dir']);
    }

    if (!$fs->exists($paths['file'])) {
        $fs->put_contents($paths['file'], "<!-- Carte des soins -->\n", FS_CHMOD_FILE);
    }
}

add_action('admin_menu', function () {
    add_management_page(
        'Carte des soins',
        'Carte des soins',
        'manage_options',
        'rvb-carte-editor',
        'rvb_carte_editor_page'
    );
});

/**
 * Renders the management page and handles save submissions.
 */
function rvb_carte_editor_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $fs = rvb_carte_editor_fs();

    if (!$fs) {
        echo '<div class="notice notice-error"><p>' . esc_html__('Impossible d’initialiser le système de fichiers WordPress.', 'rvb-carte-editor') . '</p></div>';
        return;
    }

    rvb_carte_editor_bootstrap_storage();
    $paths = rvb_carte_editor_paths();

    if (isset($_POST['rvb_carte_nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['rvb_carte_nonce'])), 'rvb_carte_save')) {
        $content = isset($_POST['rvb_carte_content']) ? wp_unslash($_POST['rvb_carte_content']) : '';
        $saved = $fs->put_contents($paths['file'], $content, FS_CHMOD_FILE);

        printf(
            '<div class="notice notice-%1$s"><p>%2$s</p></div>',
            $saved ? 'success' : 'error',
            $saved ? esc_html__('Carte enregistrée.', 'rvb-carte-editor') : esc_html__('Erreur lors de l’enregistrement.', 'rvb-carte-editor')
        );
    }

    $current = $fs->exists($paths['file']) ? $fs->get_contents($paths['file']) : '';

    ?>
    <div class="wrap">
        <h1><?php esc_html_e('Éditer la carte des soins', 'rvb-carte-editor'); ?></h1>
        <form method="post">
            <?php wp_nonce_field('rvb_carte_save', 'rvb_carte_nonce'); ?>
            <p><em><?php esc_html_e('Fichier :', 'rvb-carte-editor'); ?></em> <code><?php echo esc_html($paths['file']); ?></code></p>
            <textarea name="rvb_carte_content" rows="28" style="width:100%;font-family:monospace;"><?php echo esc_textarea($current); ?></textarea>
            <p><button class="button button-primary" type="submit"><?php esc_html_e('Enregistrer', 'rvb-carte-editor'); ?></button></p>
        </form>
    </div>
    <?php
}

add_shortcode('rvb_carte', function () {
    $fs = rvb_carte_editor_fs();

    if (!$fs) {
        return '';
    }

    $paths = rvb_carte_editor_paths();

    if (!$fs->exists($paths['file'])) {
        return '';
    }

    $content = $fs->get_contents($paths['file']);

    if (false === $content) {
        return '';
    }

    return $content;
});
