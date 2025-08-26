# Manuel Java Complet - De Zéro à Hero 🇨🇮

## Table des matières
1. [Les Classes - La Base de Tout](#1-les-classes---la-base-de-tout)
2. [Les Interfaces - Le Contrat](#2-les-interfaces---le-contrat) 
3. [Les Classes Abstraites - Le Modèle](#3-les-classes-abstraites---le-modèle)
4. [Les Collections List - La Liste de Courses](#4-les-collections-list---la-liste-de-courses)
5. [Les Collections Map - Le Répertoire](#5-les-collections-map---le-répertoire)
6. [Optional - Le Filet de Sécurité](#6-optional---le-filet-de-sécurité)
7. [Les Streams - La Chaîne de Production](#7-les-streams---la-chaîne-de-production)
8. [Projet Complet - Gestionnaire de Maquis](#8-projet-complet---gestionnaire-de-maquis)

---

## 1. Les Classes - La Base de Tout

### 🤔 Pourquoi les classes ?
Imagine que tu veux décrire un **gbaka** (taxi communal). Tu vas dire : "il a une couleur, un numéro, un chauffeur, il peut démarrer, s'arrêter...". En Java, une **classe** c'est exactement ça : un moule pour créer des objets.

### 📚 Comment ça marche ?

**Exemple concret : Un Gbaka**

```java
public class Gbaka {
    // Les caractéristiques (ce sont les attributs)
    private String couleur;
    private String numero;
    private String chauffeur;
    private boolean enMarche;
    
    // Le constructeur - comment créer un nouveau gbaka
    public Gbaka(String couleur, String numero, String chauffeur) {
        this.couleur = couleur;
        this.numero = numero; 
        this.chauffeur = chauffeur;
        this.enMarche = false; // Au début, gbaka la est arrêté
    }
    
    // Les actions (les méthodes)
    public void demarrer() {
        if (!enMarche) {
            enMarche = true;
            System.out.println("gbaka la " + numero + " démarre ! Vroooom !");
        } else {
            System.out.println("Eh waiye vié mogor, gbaka la roule déjà oh !");
        }
    }
    
    public void arreter() {
        if (enMarche) {
            enMarche = false;
            System.out.println("gbaka la " + numero + " s'arrête. On descend !");
        }
    }
    
    // Getters - pour voir les infos
    public String getCouleur() { return couleur; }
    public String getNumero() { return numero; }
    public String getChauffeur() { return chauffeur; }
    public boolean isEnMarche() { return enMarche; }
}
```

### 🎯 Utilisation pratique

```java
public class TestGbaka {
    public static void main(String[] args) {
        // Créer un nouveau gbaka
        Gbaka gbaka1 = new Gbaka("Jaune", "CI-5478", "Kouassi");
        
        System.out.println("Gbaka de " + gbaka1.getChauffeur());
        gbaka1.demarrer(); // gbaka la CI-5478 démarre ! Vroooom !
        gbaka1.demarrer(); // Eh waiye vié mogor, gbaka la roule déjà oh !
        gbaka1.arreter();  // gbaka la CI-5478 s'arrête. On descend !
    }
}
```

### 🏋️‍♂️ **EXERCICE 1 : Créer une classe Attiéké**

Crée une classe `Attieke` avec :
- Attributs : `poids` (en kg), `prix`, `vendeur`, `epice` (booléen)
- Méthodes : `ajouterEpice()`, `calculerPrixTotal()`, `afficherInfos()`

**Solution :**
```java
public class Attieke {
    private double poids;
    private int prix;
    private String vendeur;
    private boolean sel;
    
    public Attieke(double poids, int prix, String vendeur) {
        this.poids = poids;
        this.prix = prix;
        this.vendeur = vendeur;
        this.Sel = false;
    }
    
    public void ajouterSel() {
        if (!sel) {
            sel = true;
            System.out.println("Tantie " + vendeur + " ajoute du sel stp ");
        }
    }
    
    public int calculerPrixTotal() {
        int total = prix;
        if (sel) {
            total += 50; // L'épice coûte 50F de plus
        }
        return total;
    }
    
    public void afficherInfos() {
        System.out.println("Attiéké la paise " + poids + "kg Tantie " + vendeur);
        System.out.println("son prix: " + calculerPrixTotal() + "FCFA");
        System.out.println("Avec sel: " + (sel ? "Oui " : "Non"));
    }
}
```

---

## 2. Les Interfaces - Le Contrat

### 🤔 Pourquoi les interfaces ?
Tu sais comment à Abidjan, tous les **wôrô-wôrô** (taxi-moto) font pareil : ils klaxonnent, ils démarrent, ils s'arrêtent ? Peu importe la marque (Yamaha, Honda...), ils font tous ces actions de base. C'est ça une **interface** : elle dit "tout véhicule DOIT savoir faire ça".

### 📚 Comment ça marche ?

```java
// L'interface - le contrat que tout véhicule doit respecter
public interface Vehicule {
    void demarrer();
    void arreter(); 
    void klaxonner();
    int getVitesseMax();
}

// Le wôrô-wôrô respecte le contrat
public class WoroWoro implements Vehicule {
    private String marque;
    private boolean enMarche;
    
    public WoroWoro(String marque) {
        this.marque = marque;
        this.enMarche = false;
    }
    
    @Override
    public void demarrer() {
        enMarche = true;
        System.out.println("Le wôrô " + marque + " démarre : Tchiiiik !");
    }
    
    @Override
    public void arreter() {
        enMarche = false; 
        System.out.println("Le wôrô s'arrête. Client, on descend !");
    }
    
    @Override
    public void klaxonner() {
        System.out.println("PIN PIN PIN ! Dégagez la route !");
    }
    
    @Override
    public int getVitesseMax() {
        return 80; // 80 km/h max pour un wôrô
    }
}

// gbaka la aussi respecte le même contrat
public class GbakaVehicule implements Vehicule {
    private String numero;
    private boolean enMarche;
    
    public GbakaVehicule(String numero) {
        this.numero = numero;
    }
    
    @Override
    public void demarrer() {
        enMarche = true;
        System.out.println("Gbaka " + numero + " démarre : VROOOOM !");
    }
    
    @Override  
    public void arreter() {
        enMarche = false;
        System.out.println("Arrêt gbaka ! Qui descend ?");
    }
    
    @Override
    public void klaxonner() {
        System.out.println("HONK HONK ! Place place !");
    }
    
    @Override
    public int getVitesseMax() {
        return 60; // Les gbakas vont moins vite
    }
}
```

### 🎯 Pourquoi c'est génial ?

```java
public class GestionTransport {
    public static void main(String[] args) {
        // Je peux traiter tous les véhicules pareil !
        Vehicule woro = new WoroWoro("Yamaha");
        Vehicugbaka la = new GbakaVehicule("CI-1234");
        
        // Même code pour tous les véhicules
        demarrerVehicule(woro);   // Le wôrô Yamaha démarre : Tchiiiik !
        demarrerVehicule(gbaka);  // Gbaka CI-1234 démarre : VROOOOM !
    }
    
    // Cette méthode marche avec TOUS les véhicules
    public static void demarrerVehicule(Vehicule v) {
        v.demarrer();
        v.klaxonner();
    }
}
```

### 🏋️‍♂️ **EXERCICE 2 : Interface Vendeur**

Crée une interface `Vendeur` et deux classes qui l'implémentent : `VendeurAttieke` et `VendeurAloco`.

**Solution :**
```java
public interface Vendeur {
    void saluer();
    void proposerProduit();
    int calculerPrix(int quantite);
    void remercier();
}

public class VendeurAttieke implements Vendeur {
    private String nom;
    private int prixKilo = 500;
    
    public VendeurAttieke(String nom) {
        this.nom = nom;
    }
    
    @Override
    public void saluer() {
        System.out.println("Bonsoir frère ! Tante " + nom + " est là !");
    }
    
    @Override
    public void proposerProduit() {
        System.out.println("Tu veux attiéké ? C'est bon, c'est frais !");
    }
    
    @Override
    public int calculerPrix(int quantite) {
        return prixKilo * quantite;
    }
    
    @Override
    public void remercier() {
        System.out.println("Merci petit ! Que Dieu te bénisse !");
    }
}
```

---

## 3. Les Classes Abstraites - Le Modèle

### 🤔 Pourquoi les classes abstraites ?
Imagine tous les **maquis** d'Abidjan. Tous ont des points communs : ils ont des tables, un menu, ils servent à manger... Mais chaque maquis a sa spécialité. Une classe abstraite, c'est comme dire "tout maquis a ces bases, mais chacun fait sa sauce différemment".

### 📚 Comment ça marche ?

```java
// Classe abstraite - le modèle de base
public abstract class Maquis {
    protected String nom;
    protected String proprietaire; 
    protected int nbTables;
    
    public Maquis(String nom, String proprietaire, int nbTables) {
        this.nom = nom;
        this.proprietaire = proprietaire;
        this.nbTables = nbTables;
    }
    
    // Méthodes communes à tous les maquis
    public void ouvrirMaquis() {
        System.out.println("Maquis " + nom + " ouvre ses portes !");
    }
    
    public void accueillirClient() {
        System.out.println("Bienvenue chez " + proprietaire + " !");
    }
    
    // Méthode abstraite - chaque maquis doit la définir
    public abstract void preparerPlatSignature();
    public abstract int getPrixMoyen();
    public abstract void afficherMenu();
}

// Maquis spécialisé en poisson braisé  
public class MaquisPoisson extends Maquis {
    private String typePoisson;
    
    public MaquisPoisson(String nom, String proprietaire, int nbTables, String typePoisson) {
        super(nom, proprietaire, nbTables);
        this.typePoisson = typePoisson;
    }
    
    @Override
    public void preparerPlatSignature() {
        System.out.println("Préparation du " + typePoisson + " braisé...");
        System.out.println("On met les épices, on braise bien... Mmmm ça sent bon !");
    }
    
    @Override
    public int getPrixMoyen() {
        return 2500; // Prix moyen 2500F
    }
    
    @Override
    public void afficherMenu() {
        System.out.println("=== MENU " + nom.toUpperCase() + " ===");
        System.out.println("- " + typePoisson + " braisé: 2500F");
        System.out.println("- Attiéké garni: 2000F"); 
        System.out.println("- Alloco poisson: 3000F");
    }
}

// Maquis spécialisé en viande
public class MaquisViande extends Maquis {
    
    public MaquisViande(String nom, String proprietaire, int nbTables) {
        super(nom, proprietaire, nbTables);
    }
    
    @Override
    public void preparerPlatSignature() {
        System.out.println("Préparation du choukouya...");
        System.out.println("La viande grille sur le feu... Les épices sentent fort !");
    }
    
    @Override
    public int getPrixMoyen() {
        return 3000; // La viande coûte plus cher
    }
    
    @Override
    public void afficherMenu() {
        System.out.println("=== MENU " + nom.toUpperCase() + " ===");
        System.out.println("- Choukouya: 3000F");
        System.out.println("- Kedjenou: 3500F");
        System.out.println("- Brochettes: 2800F");
    }
}
```

### 🎯 Utilisation pratique

```java
public class GestionMaquis {
    public static void main(String[] args) {
        MaquisPoisson poissonDor = new MaquisPoisson("Poisson d'Or", "Tante Adjoa", 8, "Capitaine");
        MaquisViande chezKouame = new MaquisViande("Chez Kouamé", "Papa Kouamé", 12);
        
        // Tous les maquis font les bases pareilles
        poissonDor.ouvrirMaquis();
        poissonDor.accueillirClient();
        poissonDor.afficherMenu();
        poissonDor.preparerPlatSignature();
        
        System.out.println("\n---\n");
        
        chezKouame.ouvrirMaquis();
        chezKouame.accueillirClient(); 
        chezKouame.afficherMenu();
        chezKouame.preparerPlatSignature();
    }
}
```

### 🏋️‍♂️ **EXERCICE 3 : École abstraite**

Crée une classe abstraite `Ecole` et deux classes filles : `EcolePrimaire` et `EcoleSecondaire`.

---

## 4. Les Collections List - La Liste de Courses

### 🤔 Pourquoi List ?
Quand ta maman t'envoie au marché, elle te donne une liste : "Achète tomates, oignons, piment...". En Java, `List<>` c'est pareil : une liste d'éléments dans un ordre précis.

### 📚 Les types de List

**ArrayList - La liste normale**
```java
import java.util.*;

public class ListeCourses {
    public static void main(String[] args) {
        // Créer une liste de courses
        List<String> courses = new ArrayList<>();
        
        // Ajouter des éléments
        courses.add("Tomates");
        courses.add("Oignons"); 
        courses.add("Piment");
        courses.add("Huile");
        
        System.out.println("Ma liste: " + courses);
        // Ma liste: [Tomates, Oignons, Piment, Huile]
        
        // Récupérer un élément par position
        String premier = courses.get(0);
        System.out.println("Premier item: " + premier); // Tomates
        
        // Modifier un élément
        courses.set(1, "Gros oignons");
        System.out.println("Liste modifiée: " + courses);
        
        // Supprimer
        courses.remove("Piment");
        System.out.println("Sans piment: " + courses);
        
        // Taille de la liste
        System.out.println("Nombre d'items: " + courses.size());
    }
}
```

**LinkedList - La chaîne**
```java
// Meilleure quand tu ajoutes/supprimes beaucoup au début
LinkedList<String> fileAttente = new LinkedList<>();
fileAttente.addFirst("Kouassi"); // Arrive en premier
fileAttente.addFirst("Aya");     // Passe devant Kouassi
fileAttente.addLast("Adjoua");   // Se met à la fin

System.out.println("File d'attente: " + fileAttente);
// [Aya, Kouassi, Adjoua]

String suivant = fileAttente.removeFirst(); // Aya sort
System.out.println(suivant + " est servi !");
```

### 🎯 Exemple concret : Gestionnaire de playlists

```java
public class PlaylistManager {
    private List<String> chansons;
    
    public PlaylistManager() {
        chansons = new ArrayList<>();
    }
    
    public void ajouterChanson(String titre) {
        chansons.add(titre);
        System.out.println("✓ Ajouté: " + titre);
    }
    
    public void supprimerChanson(String titre) {
        if (chansons.remove(titre)) {
            System.out.println("✗ Supprimé: " + titre);
        } else {
            System.out.println("Chanson introuvable: " + titre);
        }
    }
    
    public void afficherPlaylist() {
        System.out.println("\n🎵 MA PLAYLIST 🎵");
        for (int i = 0; i < chansons.size(); i++) {
            System.out.println((i + 1) + ". " + chansons.get(i));
        }
        System.out.println("Total: " + chansons.size() + " chansons\n");
    }
    
    public void melangerPlaylist() {
        Collections.shuffle(chansons);
        System.out.println("🔀 Playlist mélangée !");
    }
    
    public static void main(String[] args) {
        PlaylistManager playlist = new PlaylistManager();
        
        playlist.ajouterChanson("Magic System - Premier Gaou");
        playlist.ajouterChanson("Alpha Blondy - Jerusalem");
        playlist.ajouterChanson("Meiway - 200% Zoblazo");
        
        playlist.afficherPlaylist();
        playlist.melangerPlaylist();
        playlist.afficherPlaylist();
    }
}
```

### 🏋️‍♂️ **EXERCICE 4 : Liste de clients maquis**

Crée un programme qui gère une liste de clients dans un maquis avec leurs commandes.

---

## 5. Les Collections Map - Le Répertoire  

### 🤔 Pourquoi Map ?
Tu sais ton répertoire téléphonique ? "Kouassi" → "07 XX XX XX XX". En Java, `Map<>` c'est pareil : pour chaque **clé** (nom), tu as une **valeur** (numéro).

### 📚 Comment ça marche ?

```java
import java.util.*;

public class RepertoireTelephone {
    public static void main(String[] args) {
        // Créer un répertoire
        Map<String, String> contacts = new HashMap<>();
        
        // Ajouter des contacts
        contacts.put("Kouassi", "07 12 34 56 78");
        contacts.put("Aya", "05 98 76 54 32"); 
        contacts.put("Adjoua", "01 23 45 67 89");
        
        // Récupérer un numéro
        String numeroKouassi = contacts.get("Kouassi");
        System.out.println("Numéro de Kouassi: " + numeroKouassi);
        
        // Vérifier si quelqu'un existe
        if (contacts.containsKey("Aya")) {
            System.out.println("Aya est dans mes contacts !");
        }
        
        // Parcourir tous les contacts
        System.out.println("\n📞 MES CONTACTS 📞");
        for (String nom : contacts.keySet()) {
            System.out.println(nom + " → " + contacts.get(nom));
        }
    }
}
```

### 🎯 Exemple pratique : Stock de marchandises

```java
public class StockMarchandises {
    private Map<String, Integer> stock;
    private Map<String, Integer> prix;
    
    public StockMarchandises() {
        stock = new HashMap<>();
        prix = new HashMap<>();
    }
    
    public void ajouterProduit(String produit, int quantite, int prixUnitaire) {
        stock.put(produit, quantite);
        prix.put(produit, prixUnitaire);
        System.out.println("✓ " + produit + " ajouté: " + quantite + " unités à " + prixUnitaire + "F");
    }
    
    public boolean vendre(String produit, int quantite) {
        if (!stock.containsKey(produit)) {
            System.out.println("❌ Produit inexistant: " + produit);
            return false;
        }
        
        int stockActuel = stock.get(produit);
        if (stockActuel < quantite) {
            System.out.println("❌ Stock insuffisant pour " + produit + " (demandé: " + quantite + ", disponible: " + stockActuel + ")");
            return false;
        }
        
        stock.put(produit, stockActuel - quantite);
        int chiffre = quantite * prix.get(produit);
        System.out.println("✅ Vendu " + quantite + " " + produit + " pour " + chiffre + "F");
        return true;
    }
    
    public void afficherStock() {
        System.out.println("\n📦 STOCK ACTUEL 📦");
        for (String produit : stock.keySet()) {
            int quantite = stock.get(produit);
            int prixUnit = prix.get(produit);
            System.out.println(produit + ": " + quantite + " unités (" + prixUnit + "F/unité)");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        StockMarchandises boutique = new StockMarchandises();
        
        boutique.ajouterProduit("Attiéké", 50, 500);
        boutique.ajouterProduit("Alloco", 30, 300);  
        boutique.ajouterProduit("Poisson braisé", 20, 2000);
        
        boutique.afficherStock();
        
        boutique.vendre("Attiéké", 5);
        boutique.vendre("Alloco", 35); // Pas assez !
        boutique.vendre("Bangui", 1);  // N'existe pas !
        
        boutique.afficherStock();
    }
}
```

### 🏋️‍♂️ **EXERCICE 5 : Carnet de notes**

Crée un programme qui gère les notes des élèves avec Map<String, Double>.

---

## 6. Optional - Le Filet de Sécurité

### 🤔 Pourquoi Optional ?
Tu sais quand tu cherches quelque chose et des fois tu trouves, des fois non ? Avant, en Java, quand on trouvait rien, ça plantait avec `NullPointerException`. `Optional` dit : "Peut-être que j'ai quelque chose, peut-être pas. Vérifie avant !"

### 📚 Comment ça marche ?

**Le problème avant :**
```java
// ❌ DANGEREUX - peut planter !
public String trouverTelephone(String nom) {
    Map<String, String> contacts = getContacts();
    return contacts.get(nom); // Retourne null si pas trouvé !
}

String tel = trouverTelephone("Inconnu");
System.out.println(tel.length()); // 💥 BOOM ! NullPointerException
```

**La solution avec Optional :**
```java
public Optional<String> trouverTelephoneSafe(String nom) {
    Map<String, String> contacts = getContacts();
    String telephone = contacts.get(nom);
    
    if (telephone != null) {
        return Optional.of(telephone);      // J'ai trouvé !
    } else {
        return Optional.empty();            // J'ai pas trouvé
    }
}

// Utilisation sécurisée
Optional<String> tel = trouverTelephoneSafe("Kouassi");
if (tel.isPresent()) {
    System.out.println("Téléphone: " + tel.get());
} else {
    System.out.println("Numéro introuvable !");
}
```

### 🎯 Méthodes pratiques d'Optional

```java
public class OptionalExemples {
    public static void main(String[] args) {
        Optional<String> nomOptional = Optional.of("Kouassi");
        Optional<String> videOptional = Optional.empty();
        
        // isPresent() - vérifie s'il y a quelque chose
        if (nomOptional.isPresent()) {
            System.out.println("Nom: " + nomOptional.get());
        }
        
        // orElse() - valeur par défaut si vide
        String nom = videOptional.orElse("Nom inconnu");
        System.out.println("Nom: " + nom); // Nom: Nom inconnu
        
        // orElseGet() - calcule une valeur par défaut
        String nomGenere = videOptional.orElseGet(() -> "Utilisateur" + Math.random());
        
        // ifPresent() - fait quelque chose seulement si présent
        nomOptional.ifPresent(n -> System.out.println("Salut " + n + " !"));
        
        // map() - transforme la valeur si présente
        Optional<String> nomMajuscule = nomOptional.map(String::toUpperCase);
        System.out.println(nomMajuscule.orElse("PAS DE NOM")); // KOUASSI
    }
}
```

### 🎯 Exemple concret : Recherche dans un maquis

```java
public class RechercheMenuMaquis {
    private Map<String, Integer> menu;
    
    public RechercheMenuMaquis() {
        menu = new HashMap<>();
        menu.put("attiéké", 500);
        menu.put("alloco", 300);
        menu.put("poisson braisé", 2000);
        menu.put("kedjenou", 3000);
    }
    
    public Optional<Integer> chercherPrix(String plat) {
        Integer prix = menu.get(plat.toLowerCase());
        return prix != null ? Optional.of(prix) : Optional.empty();
    }
    
    public void commander(String plat, int argent) {
        Optional<Integer> prixOpt = chercherPrix(plat);
        
        prixOpt.ifPresentOrElse(
            prix -> {
                if (argent >= prix) {
                    System.out.println("✅ Commande acceptée ! " + plat + " pour " + prix + "F");
                    int monnaie = argent - prix;
                    if (monnaie > 0) {
                        System.out.println("Votre monnaie: " + monnaie + "F");
                    }
                } else {
                    System.out.println("❌ Pas assez d'argent ! " + plat + " coûte " + prix + "F");
                }
            },
            () -> System.out.println("❌ Plat introuvable: " + plat)
        );
    }
    
    public static void main(String[] args) {
        RechercheMenuMaquis maquis = new RechercheMenuMaquis();
        
        maquis.commander("Attiéké", 600);      // ✅ OK avec monnaie
        maquis.commander("Kedjenou", 2000);    // ❌ Pas assez d'argent  
        maquis.commander("Pizza", 5000);       // ❌ Plat introuvable
    }
}
```

### 🏋️‍♂️ **EXERCICE 6 : Recherche d'élève dans une base de données**

Imagine que tu as une base de données d'élèves (simulée par une `Map`). Ta tâche est de créer une méthode qui recherche un élève par son matricule.

**Instructions :**
1.  Crée une classe `Eleve` avec `matricule` (String) et `nom` (String).
2.  Crée une classe `BaseDeDonneesEleves` qui contient une `Map<String, Eleve>` pour stocker les élèves.
3.  Dans `BaseDeDonneesEleves`, écris une méthode `chercherParMatricule(String matricule)` qui retourne un `Optional<Eleve>`.
4.  Teste ta méthode avec un matricule qui existe et un qui n'existe pas, en utilisant `ifPresentOrElse()` pour afficher le résultat.

**Solution :**
```java
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

class Eleve {
    String matricule;
    String nom;

    public Eleve(String matricule, String nom) {
        this.matricule = matricule;
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Élève [matricule=" + matricule + ", nom=" + nom + "]";
    }
}

class BaseDeDonneesEleves {
    private Map<String, Eleve> eleves = new HashMap<>();

    public BaseDeDonneesEleves() {
        eleves.put("MAT001", new Eleve("MAT001", "Kouassi"));
        eleves.put("MAT002", new Eleve("MAT002", "Aya"));
    }

    public Optional<Eleve> chercherParMatricule(String matricule) {
        return Optional.ofNullable(eleves.get(matricule));
    }
}

public class TestRechercheEleve {
    public static void main(String[] args) {
        BaseDeDonneesEleves bd = new BaseDeDonneesEleves();

        System.out.println("Recherche de MAT001 : ");
        bd.chercherParMatricule("MAT001").ifPresentOrElse(
            eleve -> System.out.println("Trouvé : " + eleve),
            () -> System.out.println("Cet élève n'existe pas.")
        );

        System.out.println("\nRecherche de MAT003 : ");
        bd.chercherParMatricule("MAT003").ifPresentOrElse(
            eleve -> System.out.println("Trouvé : " + eleve),
            () -> System.out.println("Cet élève n'existe pas.")
        );
    }
}
```

---

## 7. Les Streams - La Chaîne de Production

### 🤔 Pourquoi les Streams ?
Imagine une **chaîne de production d'attiéké** : tu prends le manioc, tu l'épluches, tu le râpes, tu le tamises, tu le cuis... Chaque étape transforme le produit. Les Streams Java, c'est pareil : tu prends une collection, tu la transformes étape par étape.

### 📚 Comment ça marche ?

**Exemple de base :**
```java
import java.util.*;
import java.util.stream.Collectors;

public class StreamsExemple {
    public static void main(String[] args) {
        List<String> prenoms = Arrays.asList(
            "Kouassi", "Aya", "Adjoua", "Koffi", "Akissi", "Yao"
        );
        
        // Méthode ancienne (sans streams)
        List<String> prenomsLongs = new ArrayList<>();
        for (String prenom : prenoms) {
            if (prenom.length() > 4) {
                prenomsLongs.add(prenom.toUpperCase());
            }
        }
        
        // Méthode moderne (avec streams) 
        List<String> result = prenoms.stream()
            .filter(prenom -> prenom.length() > 4)  // Garde seulement les longs
            .map(String::toUpperCase)               // Met en majuscules
            .collect(Collectors.toList());          // Récupère le résultat
        
        System.out.println("Prénoms longs: " + result);
        // [KOUASSI, ADJOUA, AKISSI]
    }
}
```

### 🎯 Les opérations principales

**1. filter() - Le tamis**
```java
List<Integer> ages = Arrays.asList(15, 22, 17, 45, 12, 33);

// Garder seulement les majeurs
List<Integer> majeurs = ages.stream()
    .filter(age -> age >= 18)
    .collect(Collectors.toList());

System.out.println("Majeurs: " + majeurs); // [22, 45, 33]
```

**2. map() - Le transformateur**
```java
List<String> villes = Arrays.asList("abidjan", "bouake", "yamoussoukro");

// Mettre en majuscules
List<String> villesMaj = villes.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(villesMaj); // [ABIDJAN, BOUAKE, YAMOUSSOUKRO]
```

**3. sorted() - Le rangeur**
```java
List<String> prenoms = Arrays.asList("Koffi", "Aya", "Kouassi", "Adjoua");

// Trier par ordre alphabétique
List<String> prenomsTriés = prenoms.stream()
    .sorted()
    .collect(Collectors.toList());

System.out.println(prenomsTriés); // [Adjoua, Aya, Koffi, Kouassi]

// Trier par longueur
List<String> parLongueur = prenoms.stream()
    .sorted((a, b) -> a.length() - b.length())
    .collect(Collectors.toList());

System.out.println(parLongueur); // [Aya, Koffi, Kouassi, Adjoua]
```

### 🎯 Exemple concret : Gestion des ventes d'un maquis

```java
public class VenteMaquis {
    static class Vente {
        String produit;
        int quantite;
        int prixUnitaire;
        String jour;
        
        public Vente(String produit, int quantite, int prixUnitaire, String jour) {
            this.produit = produit;
            this.quantite = quantite;
            this.prixUnitaire = prixUnitaire;
            this.jour = jour;
        }
        
        public int getChiffreAffaire() {
            return quantite * prixUnitaire;
        }
        
        @Override
        public String toString() {
            return produit + " (" + quantite + " × " + prixUnitaire + "F = " + getChiffreAffaire() + "F) - " + jour;
        }
    }
    
    public static void main(String[] args) {
        List<Vente> ventes = Arrays.asList(
            new Vente("Attiéké", 15, 500, "lundi"),
            new Vente("Alloco", 20, 300, "lundi"), 
            new Vente("Poisson", 8, 2000, "mardi"),
            new Vente("Attiéké", 25, 500, "mardi"),
            new Vente("Kedjenou", 5, 3000, "mercredi"),
            new Vente("Alloco", 18, 300, "mercredi")
        );
        
        System.out.println("=== ANALYSE DES VENTES ===\n");
        
        // 1. Ventes supérieures à 10000F
        System.out.println("💰 Grosses ventes (>10000F):");
        ventes.stream()
            .filter(v -> v.getChiffreAffaire() > 10000)
            .forEach(System.out::println);
        
        // 2. Chiffre d'affaire total
        int chiffreTotalPlat = ventes.stream()
            .mapToInt(Vente::getChiffreAffaire)
            .sum();
        System.out.println("\n💵 Chiffre d'affaire total: " + chiffreTotalPlat + "F");
        
        // 3. Vente moyenne par jour
        double moyenne = ventes.stream()
            .mapToInt(Vente::getChiffreAffaire)
            .average()
            .orElse(0.0);
        System.out.println("📊 Vente moyenne: " + (int)moyenne + "F");
        
        // 4. Top 3 des meilleures ventes
        System.out.println("\n🏆 TOP 3 des meilleures ventes:");
        ventes.stream()
            .sorted((a, b) -> b.getChiffreAffaire() - a.getChiffreAffaire())
            .limit(3)
            .forEach(v -> System.out.println("  " + v));
        
        // 5. Grouper par produit
        System.out.println("\n📦 Ventes par produit:");
        Map<String, Integer> ventesParProduit = ventes.stream()
            .collect(Collectors.groupingBy(
                v -> v.produit,
                Collectors.summingInt(Vente::getChiffreAffaire)
            ));
        
        ventesParProduit.forEach((produit, total) -> 
            System.out.println("  " + produit + ": " + total + "F"));
        
        // 6. Jours les plus rentables
        System.out.println("\n📅 Chiffre par jour:");
        Map<String, Integer> ventesParJour = ventes.stream()
            .collect(Collectors.groupingBy(
                v -> v.jour,
                Collectors.summingInt(Vente::getChiffreAffaire)
            ));
        
        ventesParJour.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .forEach(entry -> 
                System.out.println("  " + entry.getKey() + ": " + entry.getValue() + "F"));
    }
}
```

### 🏋️‍♂️ **EXERCICE 7 : Analyse d'une classe**

Crée une liste d'élèves avec leurs notes et utilise les streams pour :
- Trouver les élèves qui ont la moyenne
- Calculer la moyenne de la classe
- Trouver le meilleur élève

**Solution :**
```java
static class Eleve {
    String nom;
    double note;
    
    public Eleve(String nom, double note) {
        this.nom = nom;
        this.note = note;
    }
    
    public String toString() {
        return nom + ": " + note + "/20";
    }
}

public static void analyseClasse() {
    List<Eleve> classe = Arrays.asList(
        new Eleve("Kouassi", 15.5),
        new Eleve("Aya", 12.0),
        new Eleve("Koffi", 8.5),
        new Eleve("Adjoua", 17.0),
        new Eleve("Akissi", 9.5)
    );
    
    // Élèves qui ont la moyenne (≥10)
    System.out.println("✅ Élèves qui ont la moyenne:");
    classe.stream()
        .filter(e -> e.note >= 10)
        .forEach(System.out::println);
    
    // Moyenne de la classe
    double moyenne = classe.stream()
        .mapToDouble(e -> e.note)
        .average()
        .orElse(0.0);
    System.out.println("\n📊 Moyenne de classe: " + moyenne + "/20");
    
    // Meilleur élève
    Optional<Eleve> meilleur = classe.stream()
        .max((a, b) -> Double.compare(a.note, b.note));
    
    meilleur.ifPresent(e -> System.out.println("🏆 Meilleur élève: " + e));
}
```

---

## 8. Projet Complet - Gestionnaire de Maquis

### 🎯 Objectif du projet
On va créer un vrai gestionnaire de maquis qui utilise TOUS les concepts qu'on a vus !

**Ce qu'on va faire :**
- Gérer les plats du menu (classes)
- Différents types de plats (héritage/interface)
- Stock des produits (Map)
- Liste des commandes (List)  
- Recherche sécurisée (Optional)
- Analyses de ventes (Streams)

### 📁 Structure du projet

```java
// Interface de base pour tous les plats
public interface PlatMaquis {
    String getNom();
    int getPrix();
    String getDescription();
    boolean estDisponible();
    void marquerCommande();
}

// Classe abstraite pour les plats avec ingrédients
public abstract class PlatAvecIngredients implements PlatMaquis {
    protected String nom;
    protected int prix;
    protected Map<String, Integer> ingredients; // ingrédient -> quantité nécessaire
    protected int stockDisponible;
    
    public PlatAvecIngredients(String nom, int prix) {
        this.nom = nom;
        this.prix = prix;
        this.ingredients = new HashMap<>();
        this.stockDisponible = 10; // Stock initial
    }
    
    @Override
    public String getNom() { return nom; }
    
    @Override 
    public int getPrix() { return prix; }
    
    @Override
    public boolean estDisponible() { return stockDisponible > 0; }
    
    @Override
    public void marquerCommande() {
        if (stockDisponible > 0) {
            stockDisponible--;
        }
    }
    
    // Méthode abstraite - chaque plat définit sa préparation
    public abstract String preparerPlat();
    
    public void ajouterIngredient(String ingredient, int quantite) {
        ingredients.put(ingredient, quantite);
    }
    
    public Map<String, Integer> getIngredients() {
        return new HashMap<>(ingredients);
    }
}

// Plat d'attiéké
public class Attieke extends PlatAvecIngredients {
    
    public Attieke() {
        super("Attiéké garni", 1500);
        ajouterIngredient("Manioc râpé", 200); // en grammes
        ajouterIngredient("Poisson fumé", 100);
        ajouterIngredient("Tomate", 2);
        ajouterIngredient("Oignon", 1);
    }
    
    @Override
    public String getDescription() {
        return "Attiéké traditionnel avec poisson fumé, tomates et oignons";
    }
    
    @Override
    public String preparerPlat() {
        StringBuilder preparation = new StringBuilder();
        preparation.append("🍽️ Préparation de l'attiéké...\n");
        preparation.append("- Cuisson du manioc râpé à la vapeur\n");
        preparation.append("- Émietage du poisson fumé\n");
        preparation.append("- Découpe des tomates et oignons\n");
        preparation.append("- Assemblage dans l'assiette\n");
        preparation.append("✅ Attiéké prêt !");
        return preparation.toString();
    }
}

// Alloco (banane plantain frite)
public class Alloco extends PlatAvecIngredients {
    
    public Alloco() {
        super("Alloco sauce piment", 1000);
        ajouterIngredient("Banane plantain", 2);
        ajouterIngredient("Huile de palme", 100);
        ajouterIngredient("Piment", 2);
        ajouterIngredient("Tomate", 1);
    }
    
    @Override
    public String getDescription() {
        return "Banane plantain frite avec sauce pimentée";
    }
    
    @Override
    public String preparerPlat() {
        return "🍌 Préparation alloco...\n" +
               "- Découpe des bananes plantains\n" +
               "- Friture dans l'huile de palme\n" +
               "- Préparation sauce piment-tomate\n" +
               "✅ Alloco chaud et croustillant !";
    }
}

// Kedjenou (poulet à l'étouffée)
public class Kedjenou extends PlatAvecIngredients {
    
    public Kedjenou() {
        super("Kedjenou de poulet", 3500);
        ajouterIngredient("Poulet", 500);
        ajouterIngredient("Légumes", 200);
        ajouterIngredient("Épices", 50);
    }
    
    @Override
    public String getDescription() {
        return "Poulet mijoté aux légumes dans une canari traditionnelle";
    }
    
    @Override
    public String preparerPlat() {
        return "🐔 Préparation kedjenou...\n" +
               "- Découpe du poulet en morceaux\n" +
               "- Assaisonnement avec les épices\n" +
               "- Cuisson lente dans la canari\n" +
               "- Ajout des légumes\n" +
               "✅ Kedjenou fondant et parfumé !";
    }
}
```

### 🏪 Gestionnaire principal du maquis

```java
public class GestionnaireMaquis {
    private String nomMaquis;
    private String proprietaire;
    private List<PlatMaquis> menu;
    private List<Commande> commandes;
    private Map<String, Integer> chiffreAffaireParJour;
    
    static class Commande {
        private String nomClient;
        private List<PlatMaquis> plats;
        private LocalDateTime heureCommande;
        private int montantTotal;
        
        public Commande(String nomClient) {
            this.nomClient = nomClient;
            this.plats = new ArrayList<>();
            this.heureCommande = LocalDateTime.now();
            this.montantTotal = 0;
        }
        
        public void ajouterPlat(PlatMaquis plat) {
            if (plat.estDisponible()) {
                plats.add(plat);
                montantTotal += plat.getPrix();
                plat.marquerCommande();
            }
        }
        
        public String getNomClient() { return nomClient; }
        public List<PlatMaquis> getPlats() { return plats; }
        public int getMontantTotal() { return montantTotal; }
        public LocalDateTime getHeureCommande() { return heureCommande; }
        
        @Override
        public String toString() {
            return "Commande de " + nomClient + " (" + montantTotal + "F) - " + 
                   plats.size() + " plat(s)";
        }
    }
    
    public GestionnaireMaquis(String nomMaquis, String proprietaire) {
        this.nomMaquis = nomMaquis;
        this.proprietaire = proprietaire;
        this.menu = new ArrayList<>();
        this.commandes = new ArrayList<>();
        this.chiffreAffaireParJour = new HashMap<>();
        
        // Initialiser le menu
        menu.add(new Attieke());
        menu.add(new Alloco());
        menu.add(new Kedjenou());
    }
    
    public void afficherMenu() {
        System.out.println("\n🍽️ === MENU " + nomMaquis.toUpperCase() + " ===");
        System.out.println("Propriétaire: " + proprietaire + "\n");
        
        for (int i = 0; i < menu.size(); i++) {
            PlatMaquis plat = menu.get(i);
            String statut = plat.estDisponible() ? "✅" : "❌";
            System.out.println((i + 1) + ". " + plat.getNom() + " - " + 
                             plat.getPrix() + "F " + statut);
            System.out.println("   " + plat.getDescription());
            System.out.println();
        }
    }
    
    public Optional<PlatMaquis> rechercherPlat(String nomPlat) {
        return menu.stream()
            .filter(plat -> plat.getNom().toLowerCase().contains(nomPlat.toLowerCase()))
            .filter(PlatMaquis::estDisponible)
            .findFirst();
    }
    
    public Commande creerCommande(String nomClient) {
        Commande commande = new Commande(nomClient);
        commandes.add(commande);
        return commande;
    }
    
    public void finaliserCommande(Commande commande) {
        if (commande.getPlats().isEmpty()) {
            System.out.println("❌ Commande vide pour " + commande.getNomClient());
            commandes.remove(commande);
            return;
        }
        
        System.out.println("\n🧾 === FACTURE ===");
        System.out.println("Client: " + commande.getNomClient());
        System.out.println("Maquis: " + nomMaquis);
        System.out.println("Heure: " + commande.getHeureCommande().format(
            DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")));
        System.out.println("---");
        
        for (PlatMaquis plat : commande.getPlats()) {
            System.out.println(plat.getNom() + " - " + plat.getPrix() + "F");
        }
        
        System.out.println("---");
        System.out.println("TOTAL: " + commande.getMontantTotal() + "F");
        System.out.println("Merci et à bientôt ! 🙏\n");
        
        // Mettre à jour le chiffre d'affaire
        String jour = commande.getHeureCommande().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        chiffreAffaireParJour.merge(jour, commande.getMontantTotal(), Integer::sum);
    }
    
    public void afficherStatistiques() {
        System.out.println("\n📊 === STATISTIQUES " + nomMaquis.toUpperCase() + " ===");
        
        if (commandes.isEmpty()) {
            System.out.println("Aucune commande enregistrée.");
            return;
        }
        
        // Nombre total de commandes
        System.out.println("Nombre de commandes: " + commandes.size());
        
        // Chiffre d'affaire total
        int chiffreTotal = commandes.stream()
            .mapToInt(Commande::getMontantTotal)
            .sum();
        System.out.println("Chiffre d'affaire total: " + chiffreTotal + "F");
        
        // Commande moyenne
        double commandeMoyenne = commandes.stream()
            .mapToInt(Commande::getMontantTotal)
            .average()
            .orElse(0.0);
        System.out.println("Commande moyenne: " + (int)commandeMoyenne + "F");
        
        // Plus grosse commande
        Optional<Commande> plusGrosse = commandes.stream()
            .max((a, b) -> a.getMontantTotal() - b.getMontantTotal());
        
        plusGrosse.ifPresent(c -> 
            System.out.println("Plus grosse commande: " + c.getNomClient() + 
                             " (" + c.getMontantTotal() + "F)"));
        
        // Top 3 des clients
        System.out.println("\n🏆 TOP 3 des clients:");
        Map<String, Integer> depensesParClient = commandes.stream()
            .collect(Collectors.groupingBy(
                Commande::getNomClient,
                Collectors.summingInt(Commande::getMontantTotal)
            ));
        
        depensesParClient.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .limit(3)
            .forEach(entry -> System.out.println("  " + entry.getKey() + 
                                               ": " + entry.getValue() + "F"));
        
        // Plats les plus vendus
        System.out.println("\n🍽️ Plats les plus vendus:");
        Map<String, Long> ventesParPlat = commandes.stream()
            .flatMap(c -> c.getPlats().stream())
            .collect(Collectors.groupingBy(
                PlatMaquis::getNom,
                Collectors.counting()
            ));
        
        ventesParPlat.entrySet().stream()
            .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
            .forEach(entry -> System.out.println("  " + entry.getKey() + 
                                               ": " + entry.getValue() + " fois"));
    }
}
```

### 🎮 Application principale

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

public class ApplicationMaquis {
    private static Scanner scanner = new Scanner(System.in);
    private static GestionnaireMaquis maquis;
    
    public static void main(String[] args) {
        System.out.println("🍽️ Bienvenue dans le gestionnaire de maquis !");
        System.out.print("Nom du maquis: ");
        String nomMaquis = scanner.nextLine();
        System.out.print("Nom du propriétaire: ");
        String proprietaire = scanner.nextLine();
        
        maquis = new GestionnaireMaquis(nomMaquis, proprietaire);
        
        boolean continuer = true;
        while (continuer) {
            afficherMenuPrincipal();
            int choix = lireChoix();
            
            switch (choix) {
                case 1 -> maquis.afficherMenu();
                case 2 -> passerCommande();
                case 3 -> maquis.afficherStatistiques();
                case 4 -> {
                    System.out.println("Fermeture du maquis. À bientôt ! 👋");
                    continuer = false;
                }
                default -> System.out.println("Choix invalide !");
            }
        }
    }
    
    private static void afficherMenuPrincipal() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("1. Afficher le menu");
        System.out.println("2. Passer une commande");
        System.out.println("3. Voir les statistiques");
        System.out.println("4. Fermer le maquis");
        System.out.print("Votre choix: ");
    }
    
    private static int lireChoix() {
        try {
            return Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            return -1;
        }
    }
    
    private static void passerCommande() {
        System.out.print("\nNom du client: ");
        String nomClient = scanner.nextLine();
        
        if (nomClient.trim().isEmpty()) {
            System.out.println("❌ Nom client requis !");
            return;
        }
        
        Commande commande = maquis.creerCommande(nomClient);
        
        System.out.println("\n👋 Bonjour " + nomClient + " !");
        maquis.afficherMenu();
        
        boolean commandeEnCours = true;
        while (commandeEnCours) {
            System.out.print("Que voulez-vous commander ? (tapez 'fini' pour terminer): ");
            String recherche = scanner.nextLine();
            
            if ("fini".equalsIgnoreCase(recherche.trim())) {
                commandeEnCours = false;
                continue;
            }
            
            Optional<PlatMaquis> platOpt = maquis.rechercherPlat(recherche);
            
            platOpt.ifPresentOrElse(
                plat -> {
                    commande.ajouterPlat(plat);
                    System.out.println("✅ " + plat.getNom() + " ajouté à la commande !");
                    
                    // Afficher la préparation si c'est un plat avec ingrédients
                    if (plat instanceof PlatAvecIngredients) {
                        System.out.println(((PlatAvecIngredients) plat).preparerPlat());
                    }
                },
                () -> System.out.println("❌ Plat non trouvé ou non disponible: " + recherche)
            );
        }
        
        maquis.finaliserCommande(commande);
    }
}
```

### 🏋️‍♂️ **EXERCICE FINAL : Améliorations**

Améliore le projet en ajoutant :

1. **Gestion des horaires** : Le maquis n'est ouvert que de 11h à 22h
2. **Système de fidélité** : Après 5 commandes, 10% de remise
3. **Stock d'ingrédients** : Gérer le stock et alerter quand il est bas
4. **Nouveau plat** : Ajoute une classe `PoissonBraise`

---

## 🎉 Conclusion

**Tu as maintenant maîtrisé les concepts essentiels de Java !**

### Ce que tu sais faire :
✅ **Classes** - Créer des objets du monde réel  
✅ **Interfaces** - Définir des contrats  
✅ **Classes abstraites** - Créer des modèles  
✅ **List** - Gérer des collections ordonnées  
✅ **Map** - Créer des associations clé-valeur  
✅ **Optional** - Éviter les erreurs null  
✅ **Streams** - Traiter les données élégamment  

### 🎯 Prochaines étapes :
1. **Maîtrise ces concepts** en pratiquant sur d'autres projets
2. **Ajoute la persistance** (fichiers, base de données)  
3. **Apprends les exceptions** pour gérer les erreurs
4. **Découvre les threads** pour la programmation concurrente
5. **Puis seulement après** : Spring, Spring Boot...

### 💡 Conseil de grand frère :
Ne te précipite pas vers les frameworks ! Continue à faire des applications console variées:
- Gestionnaire de bibliothèque
- Système de gestion d'école  
- Calculatrice scientifique
- Jeu de cartes...

Quand tu codes ces projets les yeux fermés, tu seras prêt pour Spring ! 

**Bon code, petit frère ! 🚀🇨🇮**