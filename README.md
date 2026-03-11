# Infra DevOps Monitoring

## Présentation du projet

Ce projet a pour objectif de déployer une infrastructure DevOps complète conteneurisée avec Docker.  
L’infrastructure simule un environnement de production avec :

- Une application web (Frontend)
- Une API Backend
- Une base de données PostgreSQL
- Un cache Redis
- Une supervision complète avec Zabbix
- Un reverse proxy Nginx permettant un point d’entrée unique

L’ensemble des services est orchestré via Docker Compose.


## Architecture
┌─────────────────────────────────────────────────────────────┐
│                        INTERNET                             │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │ REVERSE     │
                    │ PROXY Nginx │  :80 / :443
                    └──────┬──────┘
                           │
          ┌────────────────┼─────────────────┐
          │                │                 │
   ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
   │  FRONTEND   │  │   BACKEND   │  │  PORTAINER  │
   │  Nginx      │  │   Node.js   │  │  Docker UI  │
   │  :80        │  │   :3000     │  │  :9000      │
   └─────────────┘  └──────┬──────┘  └─────────────┘
                           │
              ┌────────────┼────────────┐
              │                         │
       ┌──────▼──────┐         ┌────────▼────┐
       │ PostgreSQL  │         │    Redis    │
       │ :5432       │         │    :6379    │
       └─────────────┘         └─────────────┘

   ┌─────────────────────────────────────────────┐
   │              MONITORING                     │
   │                                             │
   │  ┌──────────────┐      ┌────────────────┐  │
   │  │ Zabbix Web   │      │ Zabbix Server  │  │
   │  │ :8080        ◄──────│ interne        │  │
   │  └──────────────┘      └───────┬────────┘  │
   │                                │            │
   │                       ┌────────▼────────┐  │
   │                       │  Zabbix Agent   │  │
   │                       │  interne        │  │
   │                       └─────────────────┘  │
   │                                             │
   │  ┌──────────────┐      ┌────────────────┐  │
   │  │  cAdvisor    │      │    Dozzle      │  │
   │  │  :8082       │      │    :8080       │  │
   │  └──────────────┘      └────────────────┘  │
   └─────────────────────────────────────────────┘

   ┌─────────────────────────────────────────────┐
   │              SÉCURITÉ                       │
   │                                             │
   │  ┌──────────────┐      ┌────────────────┐  │
   │  │  CrowdSec    │      │ CS Bouncer     │  │
   │  │  (IDS)       ├──────► :8080          │  │
   │  └──────────────┘      └────────────────┘  │
   │                                             │
   │  ┌──────────────┐      ┌────────────────┐  │
   │  │ Vaultwarden  │      │   Metabase     │  │
   │  │ :80          │      │   :3001        │  │
   │  └──────────────┘      └────────────────┘  │
   └─────────────────────────────────────────────┘

## Services déployés

| Service | Description | Port |
|--------|-------------|------|
| Frontend | Interface web utilisateur | via Nginx |
| Backend | API applicative | 3000 |
| PostgreSQL | Base de données principale | interne |
| Redis | Cache mémoire | interne |
| Zabbix Web | Interface supervision | 8080 |
| Zabbix Server | Collecte métriques | interne |
| Zabbix Agent | Agent monitoring | interne |
| Reverse Proxy (Nginx) | Point d’entrée unique | 8081 |

## Accès aux services

- Site supervision :  
[  http://IP_SERVEUR](http://20.111.59.13)
