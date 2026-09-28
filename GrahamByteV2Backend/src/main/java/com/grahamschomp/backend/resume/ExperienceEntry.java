package com.grahamschomp.backend.resume;

import java.util.List;

public record ExperienceEntry(
        String title,
        String company,
        String location,
        String startDate,
        String endDate,
        List<String> bullets
) {
}
