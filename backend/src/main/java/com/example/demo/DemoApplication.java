package com.example.demo;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner init(TaskRepository taskRepository) {
		return args -> {
			Stream.of("Clean your room", "Update your journal", "Prepare dinner").forEach(title -> {
				Task task = new Task(title);
				taskRepository.save(task);
			});
			taskRepository.findAll().forEach(System.out::println);
		};
	}

}
