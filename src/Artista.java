package meuPacote;

public class Artista {
    protected String nome;
    protected int diaDoShow;
    protected int mesDoShow;

    public Artista(String nome, int diaDoShow, int mesDoShow) {
        this.nome = nome;
        this.diaDoShow = diaDoShow;
        this.mesDoShow = mesDoShow;
    }

    // Getters fundamentais para o Front-end ler os dados
    public String getNome() { return nome; }
    public int getDiaDoShow() { return diaDoShow; }
    public int getMesDoShow() { return mesDoShow; }
}