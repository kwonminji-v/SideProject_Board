package com.playhub.Dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDTO {

    private Long id;

    private String writer;
    private String title;
    private String content;
}
