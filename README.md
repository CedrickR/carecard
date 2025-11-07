# Carecard

Application web pour éditer et prévisualiser la carte des soins RVB Spa.

## Démarrage rapide avec Docker

1. Construire et lancer le conteneur :

   ```bash
   docker compose up --build
   ```

2. Ouvrir le navigateur sur [http://127.0.0.1:8003](http://127.0.0.1:8003).

Le serveur Nginx intégré publie les fichiers statiques de l’éditeur et écoute sur le port 80 dans le conteneur. Le port 8003 est exposé côté hôte via `docker-compose.yml`.
