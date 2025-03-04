"use client";
import Image from "next/image";

const techStack = [
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Google Cloud", logo: "/logos/gcp.png" },
  { name: "Azure", logo: "/logos/azure.png" },
  { name: "IBM Cloud", logo: "/logos/ibm.png" },
  { name: "Oracle Cloud", logo: "/logos/oracle.png" },
  { name: "Linode", logo: "/logos/linode.png" },
  { name: "Digital Ocean", logo: "/logos/digitalocean.png" },
  { name: "OpenAI (GPT-4)", logo: "/logos/openai.png" },
  { name: "Anthropic (Claude 3)", logo: "/logos/anthropic.png" },
  { name: "Meta (Llama 3)", logo: "/logos/meta.png" },
  { name: "Amazon Titan", logo: "/logos/amazon-titan.png" },
  { name: "Hugging Face Transformers", logo: "/logos/huggingface.png" },
  { name: "Falcon AI", logo: "/logos/falcon.png" },
  { name: "Mistral AI", logo: "/logos/mistral.png" },
  { name: "Weights & Biases", logo: "/logos/wandb.png" },
  { name: "Arize AI", logo: "/logos/arize.png" },
  { name: "MLflow", logo: "/logos/mlflow.png" },
  { name: "ClearML", logo: "/logos/clearml.png" },
  { name: "Snowflake", logo: "/logos/snowflake.png" },
  { name: "PostgreSQL", logo: "/logos/postgres.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "Databricks", logo: "/logos/databricks.png" },
  { name: "FastAPI", logo: "/logos/fastapi.png" },
  { name: "Flask", logo: "/logos/flask.png" },
  { name: "Express.js", logo: "/logos/express.png" },
  { name: "Terraform", logo: "/logos/terraform.png" },
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "AWS CDK", logo: "/logos/aws-cdk.png" },
  { name: "GitHub Actions", logo: "/logos/github-actions.png" },
  { name: "HashiCorp Vault", logo: "/logos/vault.png" },
  { name: "SentinelOne", logo: "/logos/sentinelone.png" },
  { name: "CrowdStrike", logo: "/logos/crowdstrike.png" },
  { name: "NVIDIA Jetson", logo: "/logos/jetson.png" },
  { name: "AWS Panorama", logo: "/logos/panorama.png" },
];

export default function TechStack() {
  return (
    <section className="py-16 text-center bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Technologies We Work With</h2>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {techStack.map(({ name, logo }) => (
          <div 
            key={name} 
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex justify-center items-center transition-all hover:scale-105"
          >
            <Image 
              src={logo} 
              alt={`${name} Logo`} 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
