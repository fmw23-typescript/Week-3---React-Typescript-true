# Week 3 - React + Typescript = true

Week 3 thuesday, excersies and workshop.

## Exercises

Steg 3 - Övningar
Övning 1: Skapa och Utforska ett React TypeScript-projekt
Uppgift:

Skapa ett nytt React-projekt med TypeScript:

bash
Kopiera kod
npx create-react-app my-app --template typescript
Starta utvecklingsservern och säkerställ att applikationen körs korrekt.

Utforska projektstrukturen och identifiera var TypeScript-konfigurationen finns (tsconfig.json).

Mål: Lära sig att sätta upp och navigera i en React-applikation med TypeScript.

Övning 2: Typning av Funktionella Komponenter och Props
Uppgift:

Skapa en ProductItem-komponent:

Definiera ett interface för ProductItemProps som inkluderar name, price och description.

Skapa komponenten som visar dessa egenskaper.

typescript
Kopiera kod
interface ProductItemProps {
name: string;
price: number;
description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price, description }) => {
return (

<div>
<h2>{name}</h2>
<p>{description}</p>
<p>Pris: {price} kr</p>
</div>
);
};
Använda komponenten:

Importera och använd ProductItem i huvudkomponenten (App.tsx) och skicka in props.
Mål: Förstå hur man typar funktionella komponenter och deras props i React med TypeScript.

Övning 3: Använda useState med TypeScript
Uppgift:

Skapa en komponent CartCounter som håller reda på antalet produkter i kundvagnen.

Använd useState för att hantera state.

Typa state-variabeln explicit:

typescript
Kopiera kod
const [itemCount, setItemCount] = useState<number>(0);
Lägg till knappar för att öka och minska antalet produkter.

Mål: Lära sig att använda useState-hooken med korrekt typning.

Övning 4: Använda useContext med TypeScript
Uppgift:

Skapa ett UserContext:

Definiera ett interface User med name och isLoggedIn.
Skapa contextet med React.createContext<User | null>(null).
Implementera en UserProvider:

Skapa en komponent som tillhandahåller UserContext till barnkomponenter.
Använda useContext i en komponent:

Skapa en komponent som använder useContext för att hämta användarinformation och visar en välkomsthälsning.
Mål: Förstå hur man använder useContext med TypeScript för att hantera globalt state.

Övning 5: Typad Formulärhantering och Händelser
Uppgift:

Skapa ett beställningsformulär där användaren kan lägga till en produkt till sin beställning.

Hantera inputfält för namn, e-post och produktval.

Typa händelsehanterare för onChange och onSubmit korrekt.

typescript
Kopiera kod
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
/_ ... _/
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
/_ ... _/
};
Mål: Lära sig att hantera formulär och händelser i React med korrekt typning.

Övning 6: Generiska Komponenter och Hooks
Uppgift:

Skapa en generisk useFetch-hook:

Implementera en custom hook useFetch<T> som hämtar data från en API-endpoint och returnerar data, loading-status och eventuella fel.

Typa hooken så att den är generisk och kan användas för olika typer av data.

typescript
Kopiera kod
import { useState, useEffect } from 'react';

function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
fetch(url)
.then((response) => response.json())
.then((data: T) => {
setData(data);
setLoading(false);
})
.catch((error) => {
setError(error.message);
setLoading(false);
});
}, [url]);

return { data, loading, error };
}
Använd hooken:

Använd useFetch för att hämta produktdata från en API-endpoint och visa dem i applikationen.
Mål: Fördjupa förståelsen för generics och custom hooks i TypeScript och React.

Övning 7: Typning av Tredjepartsbibliotek
Uppgift:

Installera ett tredjepartsbibliotek, till exempel axios för API-anrop.

bash
Kopiera kod
npm install axios
npm install --save-dev @types/axios
Använd axios för att göra ett API-anrop och typa resultatet korrekt.

typescript
Kopiera kod
import axios from 'axios';

interface Product {
id: number;
name: string;
price: number;
description: string;
}

const fetchProducts = async (): Promise<Product[]> => {
const response = await axios.get<Product[]>('https://api.example.com/products');
return response.data;
};
Mål: Lära sig att arbeta med externa bibliotek och hantera typer i TypeScript.

Avancerade Övningar
Övning 8: Implementera Avancerad Global State Management med useContext och useReducer
Uppgift:

Skapa en Global State Management-lösning:

Använd useContext och useReducer för att hantera globalt state i applikationen.
Definiera en initial state som inkluderar flera delar av state, t.ex. user, products, och cart.
Skapa en reducer-funktion som hanterar olika actions för att uppdatera state.
Typa Reducer och Actions:

Definiera typer för state, actions och dispatch-funktionen.
Använd TypeScript för att säkerställa att endast giltiga actions kan dispatchas.
Implementera en Global Provider:

Skapa en AppStateProvider som tillhandahåller globalt state till hela applikationen via Context API.
Använda Globalt State i Komponenter:

Konsumera globalt state i olika komponenter med useContext.
Uppdatera state genom att dispatcha actions till reducern.
Exempel:

typescript
Kopiera kod
// types.ts
export interface UserState {
name: string;
isLoggedIn: boolean;
}

export interface Product {
id: number;
name: string;
price: number;
}

export interface CartItem {
productId: number;
quantity: number;
}

export interface AppState {
user: UserState;
products: Product[];
cart: CartItem[];
}

export type Action =
| { type: 'SET_USER'; payload: UserState }
| { type: 'ADD_PRODUCT'; payload: Product }
| { type: 'ADD_TO_CART'; payload: CartItem };
// fler actions...

// reducer.ts
import { AppState, Action } from './types';

export const initialState: AppState = {
user: { name: '', isLoggedIn: false },
products: [],
cart: [],
};

export function appReducer(state: AppState, action: Action): AppState {
switch (action.type) {
case 'SET_USER':
return { ...state, user: action.payload };
// hantera fler cases...
default:
return state;
}
}

// AppStateContext.tsx
import React, { createContext, useReducer } from 'react';
import { appReducer, initialState } from './reducer';
import { AppState, Action } from './types';

interface AppStateContextProps {
state: AppState;
dispatch: React.Dispatch<Action>;
}

export const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

export const AppStateProvider: React.FC = ({ children }) => {
const [state, dispatch] = useReducer(appReducer, initialState);

return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};
Mål: Förstå avancerad state management i React med TypeScript genom att kombinera useContext och useReducer, och hur man typar komplexa mönster.

Övning 9: Skapa en Högre-Ordningens Komponent (HOC) med TypeScript
Uppgift:

Implementera en HOC withLoading som hanterar laddningsstatus:

Skapa en HOC som tar en komponent och returnerar en ny komponent som visar en laddningsindikator tills data har hämtats.
Typa HOC
så att den är generisk och fungerar med olika typer av komponenter och props.
typescript
Kopiera kod
import React from 'react';

interface WithLoadingProps {
loading: boolean;
}

function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
return (props: P & WithLoadingProps) => {
const { loading, ...rest } = props;
if (loading) {
return <div>Laddar...</div>;
}
return <WrappedComponent {...(rest as P)} />;
};
}
Använd HOC
på en komponent som hämtar data från ett API:

Skapa en komponent ProductList som visar en lista av produkter.
Använd withLoading för att hantera laddningsstatus.
typescript
Kopiera kod
const ProductListWithLoading = withLoading(ProductList);

const ProductsPage: React.FC = () => {
const { data, loading } = useFetch<Product[]>('https://api.example.com/products');
return <ProductListWithLoading products={data || []} loading={loading} />;
};
Mål: Lära sig att skapa och typa Högre-Ordningens Komponenter i React med TypeScript.
