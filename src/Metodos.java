package meuPacote;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Metodos {

    // Melhora na performance de data
    public static int getDiaAtual() {
        return LocalDate.now().getDayOfMonth();
    }

    public static int getMesAtual() {
        return LocalDate.now().getMonthValue();
    }

    // Agora o método RETORNA uma lista, que o Front-end poderá transformar em HTML
    public List<Banda> filtrarShowsPorPrazo(List<Genero> generos, int limiteDias) {
        List<Banda> filtradas = new ArrayList<>();
        LocalDate hoje = LocalDate.now();
        LocalDate limite = hoje.plusDays(limiteDias);

        for (Genero g : generos) {
            for (Banda b : g.getBandas()) {
                LocalDate dataShow = LocalDate.of(hoje.getYear(), b.getMesDoShow(), b.getDiaDoShow());
                if (!dataShow.isBefore(hoje) && !dataShow.isAfter(limite)) {
                    filtradas.add(b);
                }
            }
        }
        return filtradas;
    }

    public List<Banda> listarTodasAsBandas(List<Genero> generos) {
        List<Banda> todas = new ArrayList<>();
        for (Genero g : generos) {
            todas.addAll(g.getBandas());
        }
        return todas;
    }
}