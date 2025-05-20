package com.upf.backend.exception;

public class TaskNotFoundException extends RuntimeException {
    public TaskNotFoundException(Long id) {
        super("Nao foi possivel encontrar a tarefa com id  " + id);
    }
}
