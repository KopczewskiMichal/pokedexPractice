"use client";

import "../globals.css";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();

  function returnHome() {
    router.push("/pokemon");
  }

  function findPokemon(searchInput) {
    const pokemonName = searchInput.toLowerCase();
    if (pokemonName) {
      router.push(`/pokemon/${pokemonName}`);
    }
  }

  return (
    <html lang="en">
      <body className={"box"}>
        <Header returnHome={returnHome} findPokemon={findPokemon} />
        {children}
      </body>
    </html>
  );
}
