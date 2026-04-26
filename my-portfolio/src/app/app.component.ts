import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MetricCard {
  label: string;
  value: string;
  note: string;
}

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  summary: string;
  highlights: string[];
}

interface ProjectItem {
  name: string;
  role: string;
  stack: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Neang Sroytry Portfolio';

  readonly metrics: MetricCard[] = [
    {
      label: 'Current Focus',
      value: 'Automation + Junior DevOps',
      note: 'Building reliable delivery and operations workflows for modern platforms.',
    },
    {
      label: 'Industry Context',
      value: 'Banking Systems',
      note: 'Hands-on support across SIT, UAT, Production, and operational troubleshooting.',
    },
    {
      label: 'Strength Area',
      value: 'Python & Release Support',
      note: 'Automation, validation, SQL verification, and deployment coordination.',
    },
  ];

  readonly coreCapabilities: string[] = [
    'Python automation for validation, alerting, and operational workflows',
    'Java Spring Boot backend fundamentals and REST API development',
    'SIT, UAT, and Production deployment validation with rollback awareness',
    'Linux, Docker, CI/CD, Kubernetes, and DevSecOps learning in public portfolio projects',
    'Oracle and MySQL querying for transaction verification and troubleshooting',
    'Cross-team collaboration with internal operations, vendors, and support teams',
  ];

  readonly toolbelt: string[] = [
    'Python',
    'Java Spring Boot',
    'SQL',
    'Docker',
    'Kubernetes',
    'GitHub Actions',
    'Jenkins',
    'Linux',
    'Postman',
    'Git',
    'FastAPI',
    'Angular',
  ];

  readonly experience: ExperienceItem[] = [
    {
      period: 'Aug 2023 - Present',
      title: 'Officer, STM Support and Projects',
      company: 'Hattha Bank Plc',
      summary:
        'Supporting banking transaction systems across SIT, UAT, and Production while improving validation, deployment readiness, and operational reliability.',
      highlights: [
        'Handled STM support, change validation, and Production go-live coordination.',
        'Maintained SIT-side control, access, test readiness, and issue follow-up.',
        'Built Python automation for transaction file processing, validation, and Telegram alerts.',
        'Used SQL for verification, incident support, and transaction workflow troubleshooting.',
      ],
    },
    {
      period: 'Jan 2023 - Jul 2023',
      title: 'Officer, ATM Support',
      company: 'Hattha Bank Plc',
      summary:
        'Maintained ATM operations with a focus on uptime, diagnostics, and coordination with field and vendor teams.',
      highlights: [
        'Supported software updates, hardware replacement, and service recovery.',
        'Performed preventive maintenance and issue diagnosis to improve uptime.',
        'Worked with branches and vendors during incidents and upgrades.',
      ],
    },
  ];

  readonly projects: ProjectItem[] = [
    {
      name: 'BankOps Release Control Platform',
      role: 'DevOps-focused portfolio project',
      stack: 'Python, FastAPI, GitOps, Argo CD, Kubernetes',
      summary:
        'A release-control platform for SIT, UAT, and PROD approvals, promotion, rollback planning, and GitOps manifest generation.',
      link: 'https://github.com/TryCalling/bankops-release-control-platform',
    },
    {
      name: 'DevSecOps Pipeline Lab',
      role: 'Security-first CI/CD portfolio project',
      stack: 'Python, GitHub Actions, Trivy, Checkov, Gitleaks, CodeQL',
      summary:
        'A production-style DevSecOps lab with scanning, SBOM generation, hardened deployment assets, and a secure sample service.',
      link: 'https://github.com/TryCalling/devsecops-pipeline-lab',
    },
    {
      name: 'BankOps Reconciliation Platform',
      role: 'Banking automation and backend portfolio project',
      stack: 'Python, FastAPI, Celery, PostgreSQL, Redis, Docker',
      summary:
        'A workflow orchestration platform for reconciliation, anomaly tracking, reporting, and operational processing.',
      link: 'https://github.com/TryCalling/bankops-reconciliation-platform',
    },
  ];

  readonly principles: string[] = [
    'Write systems that are easier to validate, monitor, and recover.',
    'Prefer automation when it improves reliability and reduces repeated manual work.',
    'Treat documentation, rollout safety, and operational visibility as part of delivery quality.',
  ];

  readonly contactLinks = [
    { label: 'GitHub', value: 'TryCalling', href: 'https://github.com/TryCalling' },
    {
      label: 'LinkedIn',
      value: 'sroytry-neang-ab2048256',
      href: 'https://www.linkedin.com/in/sroytry-neang-ab2048256/',
    },
    {
      label: 'Email',
      value: 'sroytryneang1708@gmail.com',
      href: 'mailto:sroytryneang1708@gmail.com',
    },
  ];
}
