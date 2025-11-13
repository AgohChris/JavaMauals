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

## 9. Les Exceptions - Gérer les Problèmes

### 🤔 Pourquoi les exceptions ?
Tu sais quand tu prends le **gbaka** et que des fois il y a un problème en route (panne, accident, contrôle de police...) ? En Java, les **exceptions** c'est pareil : c'est pour gérer les problèmes qui peuvent arriver pendant l'exécution du programme.

### 📚 Les types d'exceptions

**1. Exceptions vérifiées (Checked Exceptions)**
Ce sont les problèmes qu'on peut prévoir : fichier qui n'existe pas, connexion internet coupée...

**2. Exceptions non vérifiées (Unchecked Exceptions)**
Ce sont les erreurs de programmation : division par zéro, accès à un index qui n'existe pas...

### 🎯 Try-Catch - Le filet de sécurité

```java
public class GestionArgent {
    public static void main(String[] args) {
        try {
            // Code qui peut causer un problème
            int argentDisponible = 5000;
            int prixPlat = 0; // Oups, prix à zéro!

            int nombrePlats = argentDisponible / prixPlat;
            System.out.println("Tu peux acheter " + nombrePlats + " plats");

        } catch (ArithmeticException e) {
            // On attrape l'erreur et on gère proprement
            System.out.println("❌ Erreur : On ne peut pas diviser par zéro !");
            System.out.println("Vérifie le prix du plat d'abord.");
        }

        System.out.println("Le programme continue normalement ! ✅");
    }
}
```

### 🎯 Plusieurs catch - Gérer différents problèmes

```java
public class CommandeMaquis {
    public static void commander(String nomPlat, int argent, String[] menu) {
        try {
            // Chercher le plat dans le menu
            int indexPlat = trouverPlat(nomPlat, menu);

            // Vérifier l'argent
            if (argent <= 0) {
                throw new IllegalArgumentException("Montant invalide !");
            }

            System.out.println("✅ Commande réussie : " + menu[indexPlat]);

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("❌ Ce plat n'existe pas dans notre menu !");

        } catch (IllegalArgumentException e) {
            System.out.println("❌ " + e.getMessage());

        } catch (Exception e) {
            System.out.println("❌ Une erreur inconnue s'est produite : " + e.getMessage());

        } finally {
            // Ce bloc s'exécute TOUJOURS, qu'il y ait erreur ou pas
            System.out.println("Merci de votre visite ! 🙏");
        }
    }

    private static int trouverPlat(String nom, String[] menu) {
        for (int i = 0; i < menu.length; i++) {
            if (menu[i].equalsIgnoreCase(nom)) {
                return i;
            }
        }
        throw new ArrayIndexOutOfBoundsException();
    }
}
```

### 🎯 Créer ses propres exceptions

```java
// Exception personnalisée pour le maquis
class StockInsuffisantException extends Exception {
    private String produit;
    private int stockActuel;
    private int quantiteDemandee;

    public StockInsuffisantException(String produit, int stockActuel, int quantiteDemandee) {
        super("Stock insuffisant pour " + produit);
        this.produit = produit;
        this.stockActuel = stockActuel;
        this.quantiteDemandee = quantiteDemandee;
    }

    public String getMessageDetaille() {
        return "❌ Désolé, il reste seulement " + stockActuel + " " + produit +
               " mais tu demandes " + quantiteDemandee;
    }
}

class ArgentInsuffisantException extends Exception {
    private int prixTotal;
    private int argentDonne;

    public ArgentInsuffisantException(int prixTotal, int argentDonne) {
        super("Argent insuffisant");
        this.prixTotal = prixTotal;
        this.argentDonne = argentDonne;
    }

    public int getManquant() {
        return prixTotal - argentDonne;
    }
}

// Utilisation
public class MaquisAvecExceptions {
    private Map<String, Integer> stock;
    private Map<String, Integer> prix;

    public MaquisAvecExceptions() {
        stock = new HashMap<>();
        prix = new HashMap<>();

        stock.put("Attiéké", 10);
        stock.put("Alloco", 5);
        stock.put("Poisson", 3);

        prix.put("Attiéké", 500);
        prix.put("Alloco", 300);
        prix.put("Poisson", 2000);
    }

    public void acheter(String produit, int quantite, int argent) {
        try {
            // Vérifier que le produit existe
            if (!stock.containsKey(produit)) {
                throw new IllegalArgumentException("Produit inconnu : " + produit);
            }

            // Vérifier le stock
            int stockActuel = stock.get(produit);
            if (stockActuel < quantite) {
                throw new StockInsuffisantException(produit, stockActuel, quantite);
            }

            // Vérifier l'argent
            int prixTotal = prix.get(produit) * quantite;
            if (argent < prixTotal) {
                throw new ArgentInsuffisantException(prixTotal, argent);
            }

            // Tout est OK, on vend !
            stock.put(produit, stockActuel - quantite);
            int monnaie = argent - prixTotal;

            System.out.println("✅ Vente réussie !");
            System.out.println("   " + quantite + " " + produit + " pour " + prixTotal + "F");
            if (monnaie > 0) {
                System.out.println("   Votre monnaie : " + monnaie + "F");
            }

        } catch (StockInsuffisantException e) {
            System.out.println(e.getMessageDetaille());
            System.out.println("💡 Conseil : Réduis ta commande ou reviens demain !");

        } catch (ArgentInsuffisantException e) {
            System.out.println("❌ " + e.getMessage());
            System.out.println("   Il te manque " + e.getManquant() + "F");
            System.out.println("💡 Va retirer de l'argent et reviens !");

        } catch (IllegalArgumentException e) {
            System.out.println("❌ " + e.getMessage());
            System.out.println("💡 Regarde le menu d'abord !");
        }
    }

    public static void main(String[] args) {
        MaquisAvecExceptions maquis = new MaquisAvecExceptions();

        System.out.println("=== TEST 1 : Achat normal ===");
        maquis.acheter("Attiéké", 2, 1200);

        System.out.println("\n=== TEST 2 : Stock insuffisant ===");
        maquis.acheter("Poisson", 5, 20000);

        System.out.println("\n=== TEST 3 : Argent insuffisant ===");
        maquis.acheter("Poisson", 2, 3000);

        System.out.println("\n=== TEST 4 : Produit inconnu ===");
        maquis.acheter("Pizza", 1, 5000);
    }
}
```

### 🏋️‍♂️ **EXERCICE 8 : Gestionnaire de transport avec exceptions**

Crée une classe `GestionnaireTransport` qui gère les réservations de places dans un gbaka.

**Consignes :**
1. Crée une exception `PlacesInsuffisantesException`
2. Crée une exception `TrajetInvalideException`
3. Implémente une méthode `reserverPlaces(String trajet, int nbPlaces)` qui lance ces exceptions
4. Gère proprement les exceptions avec try-catch

**Solution :**
```java
class PlacesInsuffisantesException extends Exception {
    private int placesDisponibles;
    private int placesDemandees;

    public PlacesInsuffisantesException(int disponibles, int demandees) {
        super("Pas assez de places !");
        this.placesDisponibles = disponibles;
        this.placesDemandees = demandees;
    }

    public String getDetails() {
        return "Il reste " + placesDisponibles + " places mais tu demandes " + placesDemandees;
    }
}

class TrajetInvalideException extends Exception {
    public TrajetInvalideException(String trajet) {
        super("Trajet invalide : " + trajet);
    }
}

class GestionnaireTransport {
    private Map<String, Integer> placesParTrajet;
    private final int CAPACITE_GBAKA = 19; // Un gbaka a 19 places

    public GestionnaireTransport() {
        placesParTrajet = new HashMap<>();
        placesParTrajet.put("Yopougon-Plateau", CAPACITE_GBAKA);
        placesParTrajet.put("Adjamé-Cocody", CAPACITE_GBAKA);
        placesParTrajet.put("Abobo-Marcory", CAPACITE_GBAKA);
    }

    public void reserverPlaces(String trajet, int nbPlaces)
            throws PlacesInsuffisantesException, TrajetInvalideException {

        // Vérifier que le trajet existe
        if (!placesParTrajet.containsKey(trajet)) {
            throw new TrajetInvalideException(trajet);
        }

        // Vérifier les places disponibles
        int placesDisponibles = placesParTrajet.get(trajet);
        if (placesDisponibles < nbPlaces) {
            throw new PlacesInsuffisantesException(placesDisponibles, nbPlaces);
        }

        // Réservation OK
        placesParTrajet.put(trajet, placesDisponibles - nbPlaces);
        System.out.println("✅ Réservation confirmée !");
        System.out.println("   Trajet : " + trajet);
        System.out.println("   Places réservées : " + nbPlaces);
        System.out.println("   Places restantes : " + placesParTrajet.get(trajet));
    }

    public void afficherDisponibilites() {
        System.out.println("\n📊 PLACES DISPONIBLES 📊");
        placesParTrajet.forEach((trajet, places) ->
            System.out.println("   " + trajet + " : " + places + "/" + CAPACITE_GBAKA + " places"));
    }

    public static void main(String[] args) {
        GestionnaireTransport transport = new GestionnaireTransport();

        try {
            transport.afficherDisponibilites();

            System.out.println("\n=== Réservation 1 ===");
            transport.reserverPlaces("Yopougon-Plateau", 5);

            System.out.println("\n=== Réservation 2 ===");
            transport.reserverPlaces("Yopougon-Plateau", 15); // Trop !

        } catch (PlacesInsuffisantesException e) {
            System.out.println("❌ " + e.getMessage());
            System.out.println("   " + e.getDetails());

        } catch (TrajetInvalideException e) {
            System.out.println("❌ " + e.getMessage());
        }

        try {
            System.out.println("\n=== Réservation 3 ===");
            transport.reserverPlaces("Bouaké-Abidjan", 2); // Trajet invalide

        } catch (PlacesInsuffisantesException | TrajetInvalideException e) {
            System.out.println("❌ " + e.getMessage());
        }

        transport.afficherDisponibilites();
    }
}
```

### 💡 **Bonnes pratiques avec les exceptions**

**✅ À FAIRE :**
- Utilise des exceptions pour les situations exceptionnelles uniquement
- Crée des exceptions personnalisées claires et explicites
- Toujours nettoyer les ressources (fichiers, connexions) dans le bloc `finally`
- Donner des messages d'erreur compréhensibles

**❌ À ÉVITER :**
- Ne jamais avoir un bloc catch vide : `catch (Exception e) { }`
- Ne pas utiliser les exceptions pour le contrôle de flux normal
- Ne pas attraper `Exception` sauf si vraiment nécessaire
- Ne pas ignorer les exceptions

```java
// ❌ MAUVAIS
try {
    // code...
} catch (Exception e) {
    // Rien... on ignore l'erreur !
}

// ✅ BON
try {
    // code...
} catch (Exception e) {
    System.err.println("Erreur : " + e.getMessage());
    e.printStackTrace(); // Pour déboguer
    // Gérer l'erreur proprement
}
```

---

## 10. Les Fichiers I/O - Sauvegarder et Lire

### 🤔 Pourquoi les fichiers ?
Tu sais comment tu notes les numéros de tes clients dans un cahier ? En Java, on peut **sauvegarder** des infos dans des fichiers et les **relire** plus tard. C'est indispensable pour que tes données survivent après la fermeture du programme !

### 📚 Écrire dans un fichier

**Méthode simple avec Files (Java moderne)**
```java
import java.nio.file.*;
import java.io.IOException;
import java.util.*;

public class EcritureFichier {
    public static void main(String[] args) {
        // Créer une liste de contacts
        List<String> contacts = Arrays.asList(
            "Kouassi: 07 12 34 56 78",
            "Aya: 05 98 76 54 32",
            "Adjoua: 01 23 45 67 89",
            "Koffi: 07 55 66 77 88"
        );

        try {
            // Écrire dans le fichier (écrase le contenu existant)
            Path fichier = Paths.get("contacts.txt");
            Files.write(fichier, contacts);

            System.out.println("✅ Contacts sauvegardés dans " + fichier.toAbsolutePath());

        } catch (IOException e) {
            System.out.println("❌ Erreur lors de l'écriture : " + e.getMessage());
        }
    }
}
```

**Ajouter du contenu (append) sans écraser**
```java
public class AjouterAuFichier {
    public static void main(String[] args) {
        try {
            Path fichier = Paths.get("contacts.txt");
            String nouveauContact = "Yao: 01 11 22 33 44";

            // Ajouter à la fin du fichier
            Files.write(fichier,
                       Arrays.asList(nouveauContact),
                       StandardOpenOption.APPEND);

            System.out.println("✅ Contact ajouté !");

        } catch (IOException e) {
            System.out.println("❌ Erreur : " + e.getMessage());
        }
    }
}
```

### 📚 Lire un fichier

```java
import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class LectureFichier {
    public static void main(String[] args) {
        try {
            Path fichier = Paths.get("contacts.txt");

            // Lire toutes les lignes
            List<String> lignes = Files.readAllLines(fichier);

            System.out.println("📞 CONTACTS 📞");
            System.out.println("Nombre de contacts : " + lignes.size());
            System.out.println();

            for (int i = 0; i < lignes.size(); i++) {
                System.out.println((i + 1) + ". " + lignes.get(i));
            }

        } catch (IOException e) {
            System.out.println("❌ Fichier non trouvé ou erreur de lecture");
        }
    }
}
```

### 🎯 Exemple pratique : Gestionnaire de stock persistant

```java
import java.nio.file.*;
import java.io.*;
import java.util.*;

public class StockPersistant {
    private Map<String, Integer> stock;
    private Map<String, Integer> prix;
    private final String FICHIER_STOCK = "stock_maquis.txt";

    public StockPersistant() {
        stock = new HashMap<>();
        prix = new HashMap<>();
        chargerStock();
    }

    // Charger le stock depuis le fichier
    private void chargerStock() {
        try {
            Path fichier = Paths.get(FICHIER_STOCK);

            if (!Files.exists(fichier)) {
                System.out.println("📝 Création d'un nouveau fichier de stock...");
                initialiserStockParDefaut();
                sauvegarderStock();
                return;
            }

            List<String> lignes = Files.readAllLines(fichier);
            System.out.println("📂 Chargement du stock...");

            for (String ligne : lignes) {
                // Format : Produit|Quantité|Prix
                String[] parts = ligne.split("\\|");
                if (parts.length == 3) {
                    String produit = parts[0];
                    int quantite = Integer.parseInt(parts[1]);
                    int prixUnitaire = Integer.parseInt(parts[2]);

                    stock.put(produit, quantite);
                    prix.put(produit, prixUnitaire);
                }
            }

            System.out.println("✅ Stock chargé : " + stock.size() + " produits");

        } catch (IOException e) {
            System.out.println("❌ Erreur chargement : " + e.getMessage());
            initialiserStockParDefaut();
        }
    }

    // Sauvegarder le stock dans le fichier
    private void sauvegarderStock() {
        try {
            List<String> lignes = new ArrayList<>();

            for (String produit : stock.keySet()) {
                int quantite = stock.get(produit);
                int prixUnit = prix.get(produit);
                lignes.add(produit + "|" + quantite + "|" + prixUnit);
            }

            Files.write(Paths.get(FICHIER_STOCK), lignes);
            System.out.println("💾 Stock sauvegardé !");

        } catch (IOException e) {
            System.out.println("❌ Erreur sauvegarde : " + e.getMessage());
        }
    }

    private void initialiserStockParDefaut() {
        stock.put("Attiéké", 50);
        stock.put("Alloco", 30);
        stock.put("Poisson", 20);
        stock.put("Kedjenou", 15);

        prix.put("Attiéké", 500);
        prix.put("Alloco", 300);
        prix.put("Poisson", 2000);
        prix.put("Kedjenou", 3000);
    }

    public void ajouterProduit(String produit, int quantite, int prixUnitaire) {
        stock.put(produit, stock.getOrDefault(produit, 0) + quantite);
        prix.put(produit, prixUnitaire);
        sauvegarderStock();
        System.out.println("✅ Produit ajouté/mis à jour : " + produit);
    }

    public boolean vendre(String produit, int quantite) {
        if (!stock.containsKey(produit)) {
            System.out.println("❌ Produit inconnu : " + produit);
            return false;
        }

        int stockActuel = stock.get(produit);
        if (stockActuel < quantite) {
            System.out.println("❌ Stock insuffisant pour " + produit);
            return false;
        }

        stock.put(produit, stockActuel - quantite);
        sauvegarderStock();

        int total = quantite * prix.get(produit);
        System.out.println("✅ Vendu " + quantite + " " + produit + " pour " + total + "F");
        return true;
    }

    public void afficherStock() {
        System.out.println("\n📦 STOCK ACTUEL 📦");
        stock.forEach((produit, quantite) -> {
            int prixUnit = prix.get(produit);
            System.out.println(produit + " : " + quantite + " unités (" + prixUnit + "F/unité)");
        });
        System.out.println();
    }

    public static void main(String[] args) {
        StockPersistant stock = new StockPersistant();

        stock.afficherStock();

        stock.vendre("Attiéké", 5);
        stock.vendre("Poisson", 3);

        stock.ajouterProduit("Alloco", 10, 300);

        stock.afficherStock();

        System.out.println("\n💡 Les données sont sauvegardées dans " + stock.FICHIER_STOCK);
        System.out.println("   Relance le programme pour voir que le stock est conservé !");
    }
}
```

### 🏋️‍♂️ **EXERCICE 9 : Carnet de notes persistant**

Crée un programme qui gère un carnet de notes et sauvegarde les données dans un fichier.

**Consignes :**
1. Classe `Eleve` avec nom, matricule et liste de notes
2. Classe `CarnetDeNotes` qui sauvegarde/charge depuis un fichier
3. Méthodes : `ajouterEleve()`, `ajouterNote()`, `calculerMoyenne()`, `afficherBulletin()`
4. Format fichier : `Matricule|Nom|Note1,Note2,Note3`

**Solution :**
```java
import java.nio.file.*;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

class Eleve {
    String matricule;
    String nom;
    List<Double> notes;

    public Eleve(String matricule, String nom) {
        this.matricule = matricule;
        this.nom = nom;
        this.notes = new ArrayList<>();
    }

    public void ajouterNote(double note) {
        if (note >= 0 && note <= 20) {
            notes.add(note);
        }
    }

    public double calculerMoyenne() {
        if (notes.isEmpty()) return 0.0;
        return notes.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
    }

    public String getAppreciation() {
        double moy = calculerMoyenne();
        if (moy >= 16) return "Très bien 🏆";
        if (moy >= 14) return "Bien ✅";
        if (moy >= 12) return "Assez bien 👍";
        if (moy >= 10) return "Passable 😐";
        return "Insuffisant ❌";
    }

    @Override
    public String toString() {
        return matricule + " - " + nom + " : " +
               String.format("%.2f", calculerMoyenne()) + "/20";
    }
}

class CarnetDeNotes {
    private Map<String, Eleve> eleves;
    private final String FICHIER = "carnet_notes.txt";

    public CarnetDeNotes() {
        eleves = new HashMap<>();
        charger();
    }

    private void charger() {
        try {
            Path fichier = Paths.get(FICHIER);
            if (!Files.exists(fichier)) {
                System.out.println("📝 Nouveau carnet de notes créé");
                return;
            }

            List<String> lignes = Files.readAllLines(fichier);
            for (String ligne : lignes) {
                String[] parts = ligne.split("\\|");
                if (parts.length >= 2) {
                    String matricule = parts[0];
                    String nom = parts[1];
                    Eleve eleve = new Eleve(matricule, nom);

                    if (parts.length == 3 && !parts[2].isEmpty()) {
                        String[] notesStr = parts[2].split(",");
                        for (String noteStr : notesStr) {
                            eleve.ajouterNote(Double.parseDouble(noteStr));
                        }
                    }

                    eleves.put(matricule, eleve);
                }
            }
            System.out.println("✅ Carnet chargé : " + eleves.size() + " élèves");

        } catch (IOException e) {
            System.out.println("❌ Erreur chargement : " + e.getMessage());
        }
    }

    private void sauvegarder() {
        try {
            List<String> lignes = new ArrayList<>();

            for (Eleve eleve : eleves.values()) {
                String notesStr = eleve.notes.stream()
                    .map(String::valueOf)
                    .collect(Collectors.joining(","));

                lignes.add(eleve.matricule + "|" + eleve.nom + "|" + notesStr);
            }

            Files.write(Paths.get(FICHIER), lignes);
            System.out.println("💾 Carnet sauvegardé !");

        } catch (IOException e) {
            System.out.println("❌ Erreur sauvegarde : " + e.getMessage());
        }
    }

    public void ajouterEleve(String matricule, String nom) {
        if (eleves.containsKey(matricule)) {
            System.out.println("❌ Élève déjà existant : " + matricule);
            return;
        }
        eleves.put(matricule, new Eleve(matricule, nom));
        sauvegarder();
        System.out.println("✅ Élève ajouté : " + nom);
    }

    public void ajouterNote(String matricule, double note) {
        Eleve eleve = eleves.get(matricule);
        if (eleve == null) {
            System.out.println("❌ Élève introuvable : " + matricule);
            return;
        }
        eleve.ajouterNote(note);
        sauvegarder();
        System.out.println("✅ Note ajoutée pour " + eleve.nom);
    }

    public void afficherBulletin(String matricule) {
        Eleve eleve = eleves.get(matricule);
        if (eleve == null) {
            System.out.println("❌ Élève introuvable : " + matricule);
            return;
        }

        System.out.println("\n📋 BULLETIN DE " + eleve.nom.toUpperCase() + " 📋");
        System.out.println("Matricule : " + eleve.matricule);
        System.out.println("Notes : " + eleve.notes);
        System.out.println("Moyenne : " + String.format("%.2f", eleve.calculerMoyenne()) + "/20");
        System.out.println("Appréciation : " + eleve.getAppreciation());
        System.out.println();
    }

    public void afficherClassement() {
        System.out.println("\n🏆 CLASSEMENT DE LA CLASSE 🏆");

        List<Eleve> classement = new ArrayList<>(eleves.values());
        classement.sort((a, b) -> Double.compare(b.calculerMoyenne(), a.calculerMoyenne()));

        for (int i = 0; i < classement.size(); i++) {
            Eleve eleve = classement.get(i);
            System.out.println((i + 1) + ". " + eleve + " - " + eleve.getAppreciation());
        }
        System.out.println();
    }

    public static void main(String[] args) {
        CarnetDeNotes carnet = new CarnetDeNotes();

        // Ajouter des élèves
        carnet.ajouterEleve("MAT001", "Kouassi");
        carnet.ajouterEleve("MAT002", "Aya");
        carnet.ajouterEleve("MAT003", "Adjoua");

        // Ajouter des notes
        carnet.ajouterNote("MAT001", 15.5);
        carnet.ajouterNote("MAT001", 14.0);
        carnet.ajouterNote("MAT001", 16.5);

        carnet.ajouterNote("MAT002", 18.0);
        carnet.ajouterNote("MAT002", 17.5);
        carnet.ajouterNote("MAT002", 19.0);

        carnet.ajouterNote("MAT003", 12.0);
        carnet.ajouterNote("MAT003", 11.5);

        // Afficher bulletins
        carnet.afficherBulletin("MAT001");
        carnet.afficherBulletin("MAT002");

        // Classement
        carnet.afficherClassement();

        System.out.println("💡 Relance le programme : les données sont conservées !");
    }
}
```

---

## 11. Les Enums - Les Choix Limités

### 🤔 Pourquoi les enums ?
Tu sais les jours de la semaine ? Il y en a 7, pas plus, pas moins. Ou les catégories de plats dans un maquis : entrée, plat, dessert, boisson. Les **enums** servent à définir un ensemble fixe de constantes.

### 📚 Comment ça marche ?

```java
// Enum simple
public enum JourSemaine {
    LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE
}

// Utilisation
public class TestEnum {
    public static void main(String[] args) {
        JourSemaine jour = JourSemaine.LUNDI;

        System.out.println("Aujourd'hui c'est : " + jour);

        // Switch avec enum
        switch (jour) {
            case LUNDI:
            case MARDI:
            case MERCREDI:
            case JEUDI:
            case VENDREDI:
                System.out.println("C'est un jour de travail 💼");
                break;
            case SAMEDI:
            case DIMANCHE:
                System.out.println("C'est le weekend ! 🎉");
                break;
        }
    }
}
```

### 🎯 Enum avec valeurs et méthodes

```java
public enum CategoriePlat {
    ENTREE("Entrée", 500, "🥗"),
    PLAT_PRINCIPAL("Plat principal", 2500, "🍽️"),
    DESSERT("Dessert", 1000, "🍰"),
    BOISSON("Boisson", 500, "🥤");

    private final String libelle;
    private final int prixMoyen;
    private final String emoji;

    // Constructeur
    CategoriePlat(String libelle, int prixMoyen, String emoji) {
        this.libelle = libelle;
        this.prixMoyen = prixMoyen;
        this.emoji = emoji;
    }

    public String getLibelle() { return libelle; }
    public int getPrixMoyen() { return prixMoyen; }
    public String getEmoji() { return emoji; }

    public void afficher() {
        System.out.println(emoji + " " + libelle + " (≈" + prixMoyen + "F)");
    }
}

// Utilisation
public class TestCategorie {
    public static void main(String[] args) {
        System.out.println("🍽️ CATÉGORIES DE PLATS 🍽️");

        for (CategoriePlat cat : CategoriePlat.values()) {
            cat.afficher();
        }

        CategoriePlat plat = CategoriePlat.PLAT_PRINCIPAL;
        System.out.println("\nTu as choisi : " + plat.getLibelle());
    }
}
```

### 🎯 Exemple pratique : Statut de commande

```java
public enum StatutCommande {
    EN_ATTENTE("En attente", "⏳", "La commande est enregistrée"),
    EN_PREPARATION("En préparation", "👨‍🍳", "Le cuisinier prépare ton plat"),
    PRETE("Prête", "✅", "Ta commande est prête !"),
    LIVREE("Livrée", "🚚", "Bon appétit !"),
    ANNULEE("Annulée", "❌", "Commande annulée");

    private final String libelle;
    private final String emoji;
    private final String message;

    StatutCommande(String libelle, String emoji, String message) {
        this.libelle = libelle;
        this.emoji = emoji;
        this.message = message;
    }

    public String getLibelle() { return libelle; }
    public String getEmoji() { return emoji; }
    public String getMessage() { return message; }

    public void afficher() {
        System.out.println(emoji + " " + libelle + " : " + message);
    }

    public boolean peutPasser(StatutCommande nouveauStatut) {
        // Définir les transitions valides
        switch (this) {
            case EN_ATTENTE:
                return nouveauStatut == EN_PREPARATION || nouveauStatut == ANNULEE;
            case EN_PREPARATION:
                return nouveauStatut == PRETE || nouveauStatut == ANNULEE;
            case PRETE:
                return nouveauStatut == LIVREE;
            case LIVREE:
            case ANNULEE:
                return false; // États finaux
            default:
                return false;
        }
    }
}

class Commande {
    private String id;
    private String client;
    private StatutCommande statut;

    public Commande(String id, String client) {
        this.id = id;
        this.client = client;
        this.statut = StatutCommande.EN_ATTENTE;
    }

    public void changerStatut(StatutCommande nouveauStatut) {
        if (statut.peutPasser(nouveauStatut)) {
            statut = nouveauStatut;
            System.out.println("✅ Commande " + id + " : " + statut.getLibelle());
            statut.afficher();
        } else {
            System.out.println("❌ Impossible de passer de " + statut.getLibelle() +
                             " à " + nouveauStatut.getLibelle());
        }
    }

    public void afficher() {
        System.out.println("\n📦 Commande #" + id);
        System.out.println("   Client : " + client);
        System.out.println("   " + statut.getEmoji() + " " + statut.getLibelle());
    }

    public static void main(String[] args) {
        Commande cmd = new Commande("CMD001", "Kouassi");

        cmd.afficher();

        cmd.changerStatut(StatutCommande.EN_PREPARATION);
        cmd.changerStatut(StatutCommande.PRETE);
        cmd.changerStatut(StatutCommande.EN_ATTENTE); // ❌ Impossible !
        cmd.changerStatut(StatutCommande.LIVREE);

        cmd.afficher();
    }
}
```

### 🏋️‍♂️ **EXERCICE 10 : Gestion de niveaux scolaires**

Crée un enum `NiveauScolaire` avec les niveaux : CP1, CP2, CE1, CE2, CM1, CM2, 6EME, 5EME, 4EME, 3EME.

**Consignes :**
1. Ajoute un champ `cycle` (Primaire, Collège)
2. Ajoute un champ `classeSuperieure` pour naviguer entre niveaux
3. Méthode `peutRedoubler()` qui retourne true sauf pour CM2 et 3EME
4. Méthode `getNiveauSuivant()` pour passer au niveau supérieur

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
✅ **Exceptions** - Gérer les erreurs proprement
✅ **Fichiers I/O** - Sauvegarder et charger des données
✅ **Enums** - Définir des constantes typées

### 🎯 Prochaines étapes :
1. **Maîtrise ces concepts** en pratiquant sur d'autres projets
2. **Apprends les Generics** pour du code réutilisable
3. **Découvre les threads** pour la programmation concurrente
4. **Étudie les design patterns** (Singleton, Factory, Observer...)
5. **Puis seulement après** : Spring, Spring Boot...

### 💡 Conseil de grand frère :
Ne te précipite pas vers les frameworks ! Continue à faire des applications console variées:
- Gestionnaire de bibliothèque
- Système de gestion d'école
- Calculatrice scientifique
- Jeu de cartes
- Gestionnaire de contacts
- Application bancaire simple

Quand tu codes ces projets les yeux fermés, tu seras prêt pour Spring !

---

## 📝 QCM - Teste tes connaissances !

### Quiz 1 : Les Classes

**Question 1 :** Quel mot-clé utilise-t-on pour créer une nouvelle instance de classe ?
- A) `create`
- B) `new`
- C) `instance`
- D) `make`

**Réponse :** B) `new`

---

**Question 2 :** Que signifie le mot-clé `private` devant un attribut ?
- A) L'attribut est accessible depuis n'importe où
- B) L'attribut est accessible seulement dans la classe
- C) L'attribut ne peut jamais être modifié
- D) L'attribut est accessible dans toutes les classes du package

**Réponse :** B) L'attribut est accessible seulement dans la classe

---

**Question 3 :** Qu'est-ce qu'un constructeur ?
- A) Une méthode qui détruit un objet
- B) Une méthode spéciale appelée lors de la création d'un objet
- C) Une méthode qui retourne toujours `void`
- D) Une variable de classe

**Réponse :** B) Une méthode spéciale appelée lors de la création d'un objet

---

### Quiz 2 : Les Interfaces vs Classes Abstraites

**Question 1 :** Quelle est la différence principale entre une interface et une classe abstraite ?
- A) Une interface ne peut contenir aucune méthode
- B) Une classe peut implémenter plusieurs interfaces mais hériter d'une seule classe abstraite
- C) Les classes abstraites ne peuvent pas avoir de méthodes
- D) Il n'y a aucune différence

**Réponse :** B) Une classe peut implémenter plusieurs interfaces mais hériter d'une seule classe abstraite

---

**Question 2 :** Une classe abstraite peut-elle avoir des méthodes concrètes (avec implémentation) ?
- A) Oui, elle peut mélanger méthodes abstraites et concrètes
- B) Non, toutes les méthodes doivent être abstraites
- C) Seulement si elle n'a pas de constructeur
- D) Seulement les méthodes privées

**Réponse :** A) Oui, elle peut mélanger méthodes abstraites et concrètes

---

### Quiz 3 : Les Collections

**Question 1 :** Quelle collection utiliser pour garantir l'unicité des éléments ?
- A) `ArrayList`
- B) `LinkedList`
- C) `HashSet`
- D) `HashMap`

**Réponse :** C) `HashSet`

---

**Question 2 :** Dans une `Map`, comment s'appellent les deux éléments d'une paire ?
- A) Nom et Valeur
- B) Clé et Valeur
- C) Index et Élément
- D) Premier et Second

**Réponse :** B) Clé et Valeur

---

**Question 3 :** Quelle est la différence entre `ArrayList` et `LinkedList` ?
- A) `ArrayList` est plus rapide pour l'accès par index, `LinkedList` pour l'insertion/suppression en début
- B) `LinkedList` est toujours plus rapide
- C) Il n'y a aucune différence
- D) `ArrayList` ne peut contenir que des nombres

**Réponse :** A) `ArrayList` est plus rapide pour l'accès par index, `LinkedList` pour l'insertion/suppression en début

---

### Quiz 4 : Les Streams

**Question 1 :** Que fait l'opération `filter()` sur un stream ?
- A) Transforme chaque élément
- B) Garde seulement les éléments qui respectent une condition
- C) Trie les éléments
- D) Compte les éléments

**Réponse :** B) Garde seulement les éléments qui respectent une condition

---

**Question 2 :** Quelle opération est **terminale** (finalise le stream) ?
- A) `filter()`
- B) `map()`
- C) `sorted()`
- D) `collect()`

**Réponse :** D) `collect()`

---

**Question 3 :** Que fait `.mapToInt(x -> x.getAge()).sum()` ?
- A) Compte le nombre d'éléments
- B) Calcule la somme des âges
- C) Trouve l'âge maximum
- D) Filtre les âges

**Réponse :** B) Calcule la somme des âges

---

### Quiz 5 : Les Exceptions

**Question 1 :** Quel bloc s'exécute TOUJOURS, qu'il y ait erreur ou pas ?
- A) `try`
- B) `catch`
- C) `finally`
- D) `throw`

**Réponse :** C) `finally`

---

**Question 2 :** Quelle est la différence entre `throw` et `throws` ?
- A) Aucune différence
- B) `throw` lance une exception, `throws` déclare qu'une méthode peut en lancer
- C) `throws` lance une exception, `throw` déclare
- D) `throw` est pour les erreurs, `throws` pour les warnings

**Réponse :** B) `throw` lance une exception, `throws` déclare qu'une méthode peut en lancer

---

**Question 3 :** Quelle exception hérite de `RuntimeException` ?
- A) `IOException`
- B) `SQLException`
- C) `NullPointerException`
- D) `FileNotFoundException`

**Réponse :** C) `NullPointerException`

---

### Quiz 6 : Optional

**Question 1 :** Que retourne `Optional.empty()` ?
- A) `null`
- B) Une exception
- C) Un Optional vide
- D) Une erreur de compilation

**Réponse :** C) Un Optional vide

---

**Question 2 :** Quelle méthode utiliser pour fournir une valeur par défaut si l'Optional est vide ?
- A) `get()`
- B) `isPresent()`
- C) `orElse()`
- D) `map()`

**Réponse :** C) `orElse()`

---

**Question 3 :** Pourquoi utiliser Optional plutôt que `null` ?
- A) C'est plus rapide
- B) Ça force à vérifier explicitement la présence d'une valeur
- C) Ça prend moins de mémoire
- D) C'est obligatoire en Java

**Réponse :** B) Ça force à vérifier explicitement la présence d'une valeur

---

## 🎓 Mini-Projets Supplémentaires

### Projet 1 : Gestionnaire de Bibliothèque

**Objectif :** Créer un système de gestion de bibliothèque avec :
- Classe `Livre` (titre, auteur, ISBN, disponible)
- Classe `Emprunteur` (nom, matricule, livres empruntés)
- Classe `Bibliotheque` (stock de livres, liste d'emprunteurs)

**Fonctionnalités :**
1. Ajouter/supprimer des livres
2. Emprunter/retourner des livres
3. Rechercher des livres par auteur ou titre
4. Afficher l'historique d'un emprunteur
5. Sauvegarder/charger depuis un fichier

**Concepts utilisés :** Classes, Collections (List, Map), Fichiers I/O, Optional, Exceptions

---

### Projet 2 : Application Bancaire Simple

**Objectif :** Créer une mini-banque avec :
- Classe `CompteBancaire` (numéro, solde, titulaire, historique)
- Classe `Transaction` (date, type, montant)
- Enum `TypeTransaction` (DEPOT, RETRAIT, VIREMENT)

**Fonctionnalités :**
1. Créer/fermer des comptes
2. Déposer/retirer de l'argent
3. Effectuer des virements entre comptes
4. Consulter l'historique des transactions
5. Calculer le solde moyen sur une période
6. Sauvegarder les données

**Concepts utilisés :** Classes, Enums, Collections, Streams, Fichiers I/O, Exceptions personnalisées

---

### Projet 3 : Gestionnaire de Tournoi de Foot

**Objectif :** Gérer un tournoi de football avec :
- Classe `Equipe` (nom, pays, joueurs, points)
- Classe `Joueur` (nom, numéro, poste, buts)
- Classe `Match` (équipe1, équipe2, score1, score2, date)
- Classe `Tournoi` (nom, équipes, matchs, classement)

**Fonctionnalités :**
1. Ajouter des équipes et des joueurs
2. Organiser des matchs
3. Enregistrer les résultats
4. Calculer le classement automatiquement
5. Afficher les statistiques (meilleur buteur, etc.)
6. Générer le calendrier des matchs

**Concepts utilisés :** Classes, Collections, Streams (tri, filtrage), Optional

---

## 💎 Astuces et Pièges à Éviter

### 🎯 Astuces Classes

**✅ ASTUCE 1 : Utilise toujours `private` pour les attributs**
```java
// ❌ MAUVAIS
public class Personne {
    public String nom; // N'importe qui peut modifier
}

// ✅ BON
public class Personne {
    private String nom;

    public String getNom() { return nom; }
    public void setNom(String nom) {
        if (nom != null && !nom.isEmpty()) {
            this.nom = nom;
        }
    }
}
```

**✅ ASTUCE 2 : Override `toString()` pour faciliter le débogage**
```java
@Override
public String toString() {
    return "Eleve{nom='" + nom + "', note=" + note + "}";
}
```

**⚠️ PIÈGE : Oublier `this` dans le constructeur**
```java
// ❌ Bug subtil !
public Personne(String nom) {
    nom = nom; // Ça ne fait rien !
}

// ✅ Correct
public Personne(String nom) {
    this.nom = nom;
}
```

---

### 🎯 Astuces Collections

**✅ ASTUCE 1 : Déclare avec l'interface, instancie avec l'implémentation**
```java
// ✅ BON
List<String> liste = new ArrayList<>();

// ❌ MOINS FLEXIBLE
ArrayList<String> liste = new ArrayList<>();
```

**✅ ASTUCE 2 : Utilise `getOrDefault()` avec Map**
```java
// ❌ LONG
Integer stock = stocks.get("Attiéké");
if (stock == null) {
    stock = 0;
}

// ✅ COURT
int stock = stocks.getOrDefault("Attiéké", 0);
```

**⚠️ PIÈGE : Modifier une liste pendant qu'on la parcourt**
```java
// ❌ ConcurrentModificationException !
for (String item : liste) {
    if (item.equals("supprimer")) {
        liste.remove(item); // BOOM !
    }
}

// ✅ Utilise Iterator ou stream
liste.removeIf(item -> item.equals("supprimer"));
```

---

### 🎯 Astuces Streams

**✅ ASTUCE 1 : Les streams sont lazy (paresseux)**
```java
// Ce code ne fait RIEN car pas d'opération terminale
liste.stream()
    .filter(x -> x > 10)
    .map(x -> x * 2); // Rien ne se passe !

// ✅ Ajoute collect() ou forEach()
liste.stream()
    .filter(x -> x > 10)
    .map(x -> x * 2)
    .collect(Collectors.toList()); // Maintenant ça s'exécute
```

**✅ ASTUCE 2 : Utilise `mapToInt()` pour les calculs**
```java
// ✅ Plus efficace
int somme = nombres.stream()
    .mapToInt(Integer::intValue)
    .sum();
```

**⚠️ PIÈGE : Ne pas réutiliser un stream**
```java
// ❌ Erreur !
Stream<String> stream = liste.stream();
stream.forEach(System.out::println);
stream.forEach(System.out::println); // IllegalStateException !

// ✅ Crée un nouveau stream
liste.stream().forEach(System.out::println);
liste.stream().forEach(System.out::println);
```

---

### 🎯 Astuces Exceptions

**✅ ASTUCE 1 : Crée des exceptions spécifiques**
```java
// ✅ BON
throw new StockInsuffisantException("Attiéké", 5, 10);

// ❌ MOINS CLAIR
throw new Exception("Problème de stock");
```

**✅ ASTUCE 2 : Try-with-resources pour les fichiers**
```java
// ✅ Fermeture automatique
try (BufferedReader reader = new BufferedReader(new FileReader("fichier.txt"))) {
    String ligne = reader.readLine();
} // Pas besoin de close(), c'est automatique !
```

**⚠️ PIÈGE : Catch trop général**
```java
// ❌ Cache tous les bugs !
try {
    // code...
} catch (Exception e) {
    // On ignore tout !
}

// ✅ Catch spécifique
try {
    // code...
} catch (IOException e) {
    // Gère l'erreur fichier
} catch (NumberFormatException e) {
    // Gère l'erreur de parsing
}
```

---

### 🎯 Astuces Optional

**✅ ASTUCE 1 : Utilise `ifPresentOrElse()` (Java 9+)**
```java
optional.ifPresentOrElse(
    valeur -> System.out.println("Trouvé : " + valeur),
    () -> System.out.println("Pas trouvé")
);
```

**⚠️ PIÈGE : Ne jamais faire `.get()` sans vérifier**
```java
// ❌ Peut planter !
String nom = optional.get();

// ✅ Vérifie d'abord
if (optional.isPresent()) {
    String nom = optional.get();
}

// ✅ Ou utilise orElse
String nom = optional.orElse("Inconnu");
```

---

## 🚀 Exercices de Synthèse

### Exercice Final 1 : Super Maquis 2.0

Améliore le projet du maquis en ajoutant :

**Nouvelles fonctionnalités :**
1. **Système de fidélité** : Après 5 commandes, 10% de remise
2. **Gestion des horaires** : Le maquis ouvre à 11h et ferme à 22h
3. **Stock d'ingrédients** : Chaque plat nécessite des ingrédients en stock
4. **Statistiques avancées** : Plat le plus rentable, heure de pointe, client VIP
5. **Notifications** : Alertes quand le stock est bas
6. **Export** : Générer un rapport journalier dans un fichier

**Contraintes techniques :**
- Utiliser des Enums pour les horaires
- Gérer toutes les erreurs avec des exceptions personnalisées
- Sauvegarder tout dans des fichiers (stock, commandes, clients)
- Utiliser les Streams pour toutes les statistiques

---

### Exercice Final 2 : Système de Transport SOTRA

Crée un système de gestion de transport inspiré de la SOTRA (transport d'Abidjan) :

**Classes nécessaires :**
- `Ligne` (numéro, trajet, prix, véhicules)
- `Vehicule` (abstrait : Gbaka, Bus, BakabaKa)
- `Trajet` (départ, arrivée, heure, passagers)
- `Passager` (nom, carte, solde)
- `Gare` (nom, lignes disponibles, horaires)

**Fonctionnalités :**
1. Créer des lignes de transport
2. Gérer plusieurs types de véhicules par ligne
3. Système de carte de transport (recharge, débit)
4. Horaires des départs
5. Statistiques : ligne la plus fréquentée, heures de pointe
6. Sauvegarde persistante

---

## 📚 Ressources Supplémentaires

### Commandes utiles pour pratiquer

**Compiler et exécuter :**
```bash
javac MaClasse.java
java MaClasse
```

**Compiler un projet avec plusieurs fichiers :**
```bash
javac -d bin src/**/*.java
java -cp bin Main
```

**Créer un JAR exécutable :**
```bash
jar cvfe MonAppli.jar Main *.class
java -jar MonAppli.jar
```

### Liens utils (si tu as internet)

1. Documentation officielle Java : https://docs.oracle.com/javase/
2. Practice en ligne : https://www.hackerrank.com/domains/java
3. Exercices : https://www.codingbat.com/java

---

**Bon code, petit frère ! 🚀🇨🇮**

_"Un bon programmeur, c'est comme un bon chauffeur de gbaka : il connaît tous les raccourcis, évite les pièges, et arrive toujours à destination !"_