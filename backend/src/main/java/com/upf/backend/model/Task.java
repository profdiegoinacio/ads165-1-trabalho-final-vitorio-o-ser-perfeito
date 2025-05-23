package com.upf.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;

@Entity
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private Priority color;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Priority getColor() {
        return color;
    }

    public void setColor(Priority color) {
        this.color = color;
    }

    public enum Priority {
        BAIXA, MEDIA, ALTA
    }
}
