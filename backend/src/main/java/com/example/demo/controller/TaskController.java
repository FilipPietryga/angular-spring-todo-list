package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    Logger logger = LoggerFactory.getLogger(Task.class);

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
        logger.info(String.valueOf(task));
        taskRepository.save(task);
    }
}