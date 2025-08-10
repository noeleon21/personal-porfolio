import ProjectCard from "@/components/ui/Projectcard"
export default function Project(){
  return (
    <div>
    <h2 className="text-2xl font-bold">Projects</h2>
           <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <ProjectCard title="Cloud Security Project" tags={["AWS", "Terraform", "linux"]} description="Set up an EC2 instance to host a web server.

Establish secure access from the EC2 instance to an RDS database instance.

Implement strict security measures while staying within the AWS Free Tier limits.

Use Terraform to deploy AWS services, demonstrating the benefits of Infrastructure as Code (IaC), such as easy reuse and automatic resource teardown."  repoUrl="https://github.com/noeleon21/Cloud_Security_V2" />
             <ProjectCard title="DevSecOps Project" tags={["Terraform","aws","linux","GithubActions"]} description="CI/CD Pipeline with GitHub Actions Automates the provisioning and teardown of infrastructure using Terraform." repoUrl="https://github.com/noeleon21/devsecops-project" />
             <ProjectCard title="Kubernetes with GKE" tags={["Terraform", "kubernetes", "GCP", "GithubActions" ]} description="This project demonstrates how to deploy a Kubernetes cluster on GCP using GKE, with the infrastructure managed by Terraform, and automated via GitHub Actions." repoUrl="https://github.com/noeleon21/Kubernetes-with-GKE" />
    </div>
    </div>

  )
}