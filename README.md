## **Steg 3 - Övningar**

### **Övning 1: Skapa och Utforska ett React TypeScript-projekt**

**Uppgift:**

**Skapa ett nytt React-projekt med TypeScript:**

- Starta utvecklingsservern och säkerställ att applikationen körs korrekt.
- Utforska projektstrukturen och identifiera var TypeScript-konfigurationen finns (tsconfig.json).

**Mål:** Lära sig att sätta upp och navigera i en React-applikation med TypeScript.

### **Övning 2: Typning av Funktionella Komponenter och Props**

**Uppgift:**

**Skapa en ProductItem-komponent:**

- Definiera ett interface för ProductItemProps som inkluderar name, price och description.
- Skapa komponenten som visar dessa egenskaper.

**Använda Komponenten:**

- Importera och använd ProductItem i huvudkomponenten (App.tsx) och skicka in props.

**Mål:** Förstå hur man typar funktionella komponenter och deras props i React med TypeScript.

### **Övning 3: Använda useState med TypeScript**

**Uppgift:**

- Skapa en komponent CartCounter som håller reda på antalet produkter i kundvagnen.
- Använd useState för att hantera state.
- Typa state-variabeln explicit:

- Lägg till knappar för att öka och minska antalet produkter.

**Mål:** Lära sig att använda useState-hooken med korrekt typning.

### **Övning 4: Använda useContext med TypeScript**

**Uppgift:**

**Skapa ett UserContext:**

- Definiera ett interface User med name och isLoggedIn.
- Skapa contextet med React.createContext(null).

**Implementera en UserProvider:**

- Skapa en komponent som tillhandahåller UserContext till barnkomponenter.

**Använda useContext i en Komponent:**

- Skapa en komponent som använder useContext för att hämta användarinformation och visar en välkomsthälsning.

**Mål:** Förstå hur man använder useContext med TypeScript för att hantera globalt state.

### **Övning 5: Typad Formulärhantering och Händelser**

**Uppgift:**

- Skapa ett beställningsformulär där användaren kan lägga till en produkt till sin beställning.
- Hantera inputfält för namn, e-post och produktval.
- Typa händelsehanterare för onChange och onSubmit korrekt.

**Mål:** Lära sig att hantera formulär och händelser i React med korrekt typning.

### **Övning 6: Generiska Komponenter och Hooks**

**Uppgift:**

**Skapa en Generisk useFetch-Hook:**

- Implementera en custom hook useFetch som hämtar data från en API-endpoint och returnerar data, loading-status och eventuella fel.
- Typa hooken så att den är generisk och kan användas för olika typer av data.

**Använd Hooken:**

- Använd useFetch för att hämta produktdata från en API-endpoint och visa dem i applikationen.

**Mål:** Fördjupa förståelsen för generics och custom hooks i TypeScript och React.

### **Övning 7: Typning av Tredjepartsbibliotek**

**Uppgift:**

- Installera ett tredjepartsbibliotek, till exempel axios för API-anrop.

- Använd axios för att göra ett API-anrop och typa resultatet korrekt.

**Mål:** Lära sig att arbeta med externa bibliotek och hantera typer i TypeScript.

### **Avancerade Övningar**

#### **Övning 8: Implementera Avancerad Global State Management med useContext och useReducer**

**Uppgift:**

**Skapa en Global State Management-lösning:**

- Använd useContext och useReducer för att hantera globalt state i applikationen.
- Definiera en initial state som inkluderar flera delar av state, t.ex. user, products, och cart.
- Skapa en reducer-funktion som hanterar olika actions för att uppdatera state.

**Typa Reducer och Actions:**

- Definiera typer för state, actions och dispatch-funktionen.
- Använd TypeScript för att säkerställa att endast giltiga actions kan dispatchas.

**Implementera en Global Provider:**

- Skapa en AppStateProvider som tillhandahåller globalt state till hela applikationen via Context API eller Redux Toolkit.

**Använda Globalt State i Komponenter:**

- Konsumera globalt state i olika komponenter med useContext redux.
- Uppdatera state genom att dispatcha actions till reducern.

**Mål:** Förstå avancerad state management i React med TypeScript genom att kombinera useContext och useReducer, och hur man typar komplexa mönster.

#### **Övning 9: Skapa en Högre-Ordningens Komponent (HOC) med TypeScript**

**Uppgift:**

**Implementera en HOC withLoading som hanterar laddningsstatus:**

- Skapa en HOC som tar en komponent och returnerar en ny komponent som visar en laddningsindikator tills data har hämtats.
- Typa HOC, så att den är generisk och fungerar med olika typer av komponenter och props.

**Använd HOC**

**på en komponent som hämtar data från ett API:**

- Skapa en komponent ProductList som visar en lista av produkter.
- Använd withLoading för att hantera laddningsstatus.

**Mål:** Lära sig att skapa och typa Högre-Ordningens Komponenter i React med TypeScript.
