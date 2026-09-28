package com.grahamschomp.backend.resume;

import java.util.List;

public record SkillCategory(
        String category,
        List<String> items
) {
}
