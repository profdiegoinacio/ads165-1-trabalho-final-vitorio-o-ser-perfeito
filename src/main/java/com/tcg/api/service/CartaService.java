package com.tcg.api.service;

import com.tcg.api.domain.Carta;
import com.tcg.api.repository.CartaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartaService {

    private final CartaRepository cartaRepository;

    public CartaService(CartaRepository cartaRepository) {
        this.cartaRepository = cartaRepository;
    }

    public List<Carta> listarTodos() {
        return cartaRepository.findAll();
    }

    public Optional<Carta> buscarPorId(Long id) {
        return cartaRepository.findById(id);
    }

    public Carta salvar(Carta carta) {
        return cartaRepository.save(carta);
    }

    public void excluir(Long id) {
        cartaRepository.deleteById(id);
    }
}
