package meuPacote;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Inicialização dos Gêneros
        Genero alternative = new Genero("Alternative");
        Genero rock = new Genero("Rock");
        Genero eletronic = new Genero("Eletronic");
        Genero pop = new Genero("Pop");
        Genero reggae = new Genero("Reggae");
        Genero punk = new Genero("Punk");

        // Inicialização das Bandas (O construtor já as adiciona aos gêneros)
        new Banda("Garbage", 23, 3, alternative);
        new Banda("Pitty", 20, 4, alternative);
        new Banda("The Offspring", 10, 3, rock);
        new Banda("Olivia Rodrigo", 26, 3, pop);
        new Banda("Natiruts", 26, 5, reggae);
        new Banda("The Damned", 13, 3, punk);

        List<Genero> todosGeneros = Arrays.asList(alternative, rock, eletronic, pop, reggae, punk);
        Metodos logica = new Metodos();

        // EXEMPLO DE USO PARA O BACK-END:
        // O Front-end pediria isso, e o Java responderia a lista:
        List<Banda> proximos7Dias = logica.filtrarShowsPorPrazo(todosGeneros, 7);
        
        System.out.println("Sistema pronto. Total de bandas carregadas: " + 
                           logica.listarTodasAsBandas(todosGeneros).size());
    }
}