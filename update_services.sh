#!/bin/bash

# Fichier de destination
FILE="/home/bebou/infra-devops/shared/services.json"

# Liste des services
SERVICES=("docker" "ssh" "zabbix-agent" "zabbix-agent2" "cron" "rsyslog" "ufw" "apparmor" "networking" "systemd-journald")
TOTAL=${#SERVICES[@]}

# Début du JSON
echo "{" > $FILE

# Boucle sur les services
for i in "${!SERVICES[@]}"; do
    SRV="${SERVICES[$i]}"
    
    # Récupère l'état et nettoie les sauts de ligne ou espaces invisibles
    STATUS=$(systemctl is-active "$SRV" 2>/dev/null || echo "inactive")
    STATUS=$(echo "$STATUS" | tr -d '\n\r ')

    # Ajoute la virgule sauf pour la dernière ligne
    if [ $i -lt $((TOTAL - 1)) ]; then
        echo "  \"$SRV\": \"$STATUS\"," >> $FILE
    else
        echo "  \"$SRV\": \"$STATUS\"" >> $FILE
    fi
done

# Fin du JSON
echo "}" >> $FILE