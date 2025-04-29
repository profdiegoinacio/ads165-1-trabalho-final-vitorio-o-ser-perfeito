package com.tcg.api.repository;

import com.tcg.api.domain.Carta;
import java.util.List;
import java.util.Optional;

public interface CartaRepository {

    List<Carta> findAll();

    Optional<Carta> findById(Long id);

    Carta save(Carta carta);

    void deleteById(Long id);
}
