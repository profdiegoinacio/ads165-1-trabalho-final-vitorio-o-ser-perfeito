package com.tcg.api.repository;

import com.tcg.api.domain.Carta;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class CartaRepositoryImpl implements CartaRepository {

    private final Map<Long, Carta> database = new HashMap<>();
    private Long nextId = 1L;

    @Override
    public List<Carta> findAll() {
        return new ArrayList<>(database.values());
    }

    @Override
    public Optional<Carta> findById(Long id) {
        return Optional.ofNullable(database.get(id));
    }

    @Override
    public Carta save(Carta carta) {
        if (carta.getId() == null) {
            carta.setId(nextId++);
        }
        database.put(carta.getId(), carta);
        return carta;
    }

    @Override
    public void deleteById(Long id) {
        database.remove(id);
    }
}
