package com.grahamschomp.backend.resume;

import java.util.List;

public record Resume(
        String name,
        String location,
        String email,
        String githubUrl,
        String linkedinUrl,
        String headline,
        String summary,
        List<ExperienceEntry> experience,
        List<SkillCategory> skills,
        Education education,
        List<Certification> certifications
) {
}
