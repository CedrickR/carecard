# Carecard

Application web pour éditer et prévisualiser la carte des soins RVB Spa.

## Démarrage rapide avec Docker

1. Construire et lancer le conteneur :

   ```bash
   docker compose up --build
   ```

2. Ouvrir le navigateur sur [http://127.0.0.1:8003](http://127.0.0.1:8003).

Le serveur Nginx intégré publie les fichiers statiques de l’éditeur et écoute sur le port 80 dans le conteneur. Le port 8003 est exposé côté hôte via `docker-compose.yml`.

## Plugin WordPress « RVB – Éditeur Carte des Soins »

Les sources du plugin sont regroupées dans le dossier `plugin/rvb-carte-editor`.

### Méthodes d'installation

#### 1. Création d'une archive ZIP prête à l'emploi

Un script d'assistance permet de générer une archive installable depuis l'interface d'administration WordPress :

```bash
./tools/package-plugin.sh
```

Le fichier `dist/rvb-carte-editor.zip` produit peut être téléversé via **Extensions → Ajouter → Téléverser une extension**.

#### 2. Installation manuelle

1. Copiez le dossier `plugin/rvb-carte-editor` dans l'installation WordPress (placez-le dans `wp-content/plugins`).
2. Activez le plugin « RVB – Éditeur Carte des Soins » depuis le panneau *Extensions*.

### Utilisation du plugin

1. Rendez-vous dans **Outils → Carte des soins** pour modifier le fichier persistant `wp-content/uploads/rvb-spa/carte-2025.html`.
2. Renseignez ou collez le contenu HTML dans le champ d'édition, puis cliquez sur **Enregistrer**.
3. Intégrez la carte dans un modèle PHP avec :

   ```php
   echo file_exists(RVB_CARTE_FILE) ? file_get_contents(RVB_CARTE_FILE) : '';
   ```

   …ou ajoutez le shortcode `[rvb_carte]` dans un contenu WordPress (bloc « Code » ou « Shortcode »).

### Sécurité et persistance

Le plugin écrit et lit le fichier via `WP_Filesystem`, protège l'accès avec la capacité `manage_options` et un nonce, et crée automatiquement le dossier persistant si nécessaire.
