package com.tcg.api.domain;

public class Carta {
    private Long id;
    private String nome;
    private String descricao;
    private Integer vida;
    private Integer dano;

    public Carta() {}

    public Carta(Long id, String nome, String descricao, Integer vida, Integer dano) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.vida = vida;
        this.dano = dano;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getVida() {
        return vida;
    }

    public void setVida(Integer vida) {
        this.vida = vida;
    }

    public Integer getDano() {
        return dano;
    }

    public void setDano(Integer dano) {
        this.dano = dano;
    }
}
