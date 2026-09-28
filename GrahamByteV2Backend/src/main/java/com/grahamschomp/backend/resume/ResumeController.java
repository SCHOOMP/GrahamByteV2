package com.grahamschomp.backend.resume;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @GetMapping
    public Resume resume() {
        return new Resume(
                "Graham Schomp",
                "Austin, TX",
                "grahamschomp2@gmail.com",
                "https://github.com/SCHOOMP",
                "https://linkedin.com/in/graham-schomp-swe",
                "Data engineer and backend engineer.",
                "3+ years building production data pipelines and backend infrastructure across the "
                        + "automotive industry, edge computing, and government. Focused on reliable, unattended "
                        + "ETL/ELT: multi-source ingestion, reconciliation, data modeling, and data quality for "
                        + "deadline-driven reporting.",
                List.of(
                        new ExperienceEntry(
                                "Data Engineer",
                                "Travis County",
                                "Austin, TX",
                                "Jul 2025",
                                null,
                                List.of(
                                        "Own an end-to-end ETL pipeline unifying arrest, booking, and "
                                                + "case-disposition records from multiple county systems into one "
                                                + "operational model, processing millions of records per cycle for "
                                                + "Texas Attorney General compliance reporting.",
                                        "Built reconciliation between Odyssey and TechShare (independent systems "
                                                + "with conflicting schemas), producing one authoritative case view "
                                                + "and saving about 2 hours per report.",
                                        "Orchestrate the pipeline as SLA-driven Airflow DAGs for fully hands-off "
                                                + "quarterly runs that meet statutory deadlines.",
                                        "Implemented validation, row-count reconciliation, and idempotent loads "
                                                + "for accurate, reproducible reruns.",
                                        "Optimized SQL on high-volume tables, cutting pipeline runtime 15%."
                                )
                        ),
                        new ExperienceEntry(
                                "Backend Software Engineer",
                                "General Motors",
                                "Austin, TX",
                                "Aug 2022",
                                "Aug 2024",
                                List.of(
                                        "Built hardened Python/Bash tooling for Linux edge devices in "
                                                + "manufacturing (telemetry, logs, health checks), saving about "
                                                + "200 staff-hours per quarter.",
                                        "Migrated SQL Server to PostgreSQL with schema and index redesign: 40% "
                                                + "lower licensing costs, 60% faster queries.",
                                        "Built Java Spring Boot microservices with REST APIs.",
                                        "Operated services across hybrid cloud (AWS and on-prem) with "
                                                + "observability tooling and incident response.",
                                        "Applied OpenCV to automated defect detection for manufacturing QC."
                                )
                        )
                ),
                List.of(
                        new SkillCategory("Data engineering", List.of(
                                "ETL/ELT", "Airflow", "dbt", "Spark", "Pandas", "data modeling",
                                "reconciliation", "data quality"
                        )),
                        new SkillCategory("Languages", List.of(
                                "SQL", "Python", "Java", "C#", "Bash", "Go", "Ruby"
                        )),
                        new SkillCategory("Databases", List.of(
                                "PostgreSQL", "SQL Server", "AWS RDS", "NoSQL"
                        )),
                        new SkillCategory("Cloud and infrastructure", List.of(
                                "AWS (S3, EC2, RDS, CloudFront)", "Linux", "Docker", "hybrid cloud"
                        )),
                        new SkillCategory("Engineering practices", List.of(
                                "Git", "CI/CD", "Pytest", "JUnit", "Mockito", "REST APIs"
                        )),
                        new SkillCategory("Monitoring and reliability", List.of(
                                "Grafana", "observability"
                        ))
                ),
                new Education("University of Massachusetts Boston", "B.S. Information Technology"),
                List.of(
                        new Certification("AWS Certified Cloud Practitioner", "Feb 2025"),
                        new Certification(
                                "AWS Certified Data Engineer – Associate",
                                "In progress — exam Dec 2026"
                        )
                )
        );
    }
}
