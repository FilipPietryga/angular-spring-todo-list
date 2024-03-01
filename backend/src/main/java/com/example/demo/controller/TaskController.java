package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    private final TaskRepository taskRepository;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    @PostMapping("/tasks")
    void postTask(@RequestBody Task task) {
        taskRepository.save(task);
    }
}