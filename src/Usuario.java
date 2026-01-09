package meuPacote;

import java.util.UUID;

public class Usuario {
    private String id;
    private String nome;
    private String email;
    private String senha;

    public Usuario() {}

    // USO DE SOBRECARGA (OVERLOADING): Mesmo nome de método, parâmetros diferentes
    public Usuario(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.id = UUID.randomUUID().toString();
    }

    // SOBRECARGA: Construtor alternativo usando ID existente
    public Usuario(String id, String email, String senha, boolean usarId) {
        this.id = id;
        this.email = email;
        this.senha = senha;
    }

    // Getters e Setters
    public String getId() { return id; }
    public String getNome() { return nome; }
    public String getEmail() { return email; }
    public String getSenha() { return senha; }
}