package com.tcg.api.controller;

import com.tcg.api.domain.Carta;
import com.tcg.api.dto.CartaDTO;
import com.tcg.api.service.CartaService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/cartas")
public class CartaController {

    private final CartaService cartaService;

    public CartaController(CartaService cartaService) {
        this.cartaService = cartaService;
    }

    @GetMapping
    public List<CartaDTO> listar() {
        return cartaService.listarTodos()
                .stream()
                .map(CartaDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public CartaDTO buscar(@PathVariable Long id) {
        Carta carta = cartaService.buscarPorId(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Carta não encontrada"));
        return CartaDTO.fromEntity(carta);
    }

    @PostMapping
    public CartaDTO criar(@RequestBody @Valid CartaDTO cartaDTO) {
        Carta carta = cartaService.salvar(cartaDTO.toEntity());
        return CartaDTO.fromEntity(carta);
    }

    @PutMapping("/{id}")
    public CartaDTO atualizar(@PathVariable Long id, @RequestBody @Valid CartaDTO cartaDTO) {
        Carta carta = cartaDTO.toEntity();
        carta.setId(id);
        return CartaDTO.fromEntity(cartaService.salvar(carta));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id) {
        cartaService.excluir(id);
    }
}
