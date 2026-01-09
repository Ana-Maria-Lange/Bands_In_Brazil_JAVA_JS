package meuPacote;

import java.util.ArrayList;
import java.util.List;

public class Genero {
    private String nome;
    private List<Banda> bandas;

    public Genero(String nome) {
        this.nome = nome;
        this.bandas = new ArrayList<>();
    }

    public void adicionarBanda(Banda banda) {
        if (!bandas.contains(banda)) {
            bandas.add(banda);
        }
    }

    public String getNome() { return nome; }
    public List<Banda> getBandas() { return bandas; }
}