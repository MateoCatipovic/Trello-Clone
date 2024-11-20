package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Board;
import java.util.UUID;

public interface BoardRepository extends JpaRepository<Board, UUID> {
}
