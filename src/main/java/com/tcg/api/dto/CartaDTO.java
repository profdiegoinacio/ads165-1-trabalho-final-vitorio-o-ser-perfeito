package com.tcg.api.dto;

import com.tcg.api.domain.Carta;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class CartaDTO {
    private Long id;

    @NotBlank(message = "Nome é obrigatório")
    private String nome;

    @NotBlank(message = "Descrição é obrigatória")
    private String descricao;

    @NotNull(message = "Vida é obrigatória")
    @Positive(message = "Vida deve ser positiva")
    private Integer vida;

    @NotNull(message = "Dano é obrigatório")
    @Positive(message = "Dano deve ser positivo")
    private Integer dano;

    public CartaDTO() {}

    public CartaDTO(Long id, String nome, String descricao, Integer vida, Integer dano) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.vida = vida;
        this.dano = dano;
    }

    public static CartaDTO fromEntity(Carta carta) {
        return new CartaDTO(
                carta.getId(),
                carta.getNome(),
                carta.getDescricao(),
                carta.getVida(),
                carta.getDano()
        );
    }

    public Carta toEntity() {
        return new Carta(id, nome, descricao, vida, dano);
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
