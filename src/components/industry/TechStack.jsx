import React from "react";
import { Assets } from "../../assets/Asset";

const TechStack = () => {
  const stackCategories = [
    {
      title: "ML/DL",
      tools: [
        { name: "PyTorch", icon: Assets.Icons.Industry.Pytorch }, // Placeholder
        { name: "Scikit-learn", icon: Assets.Icons.Industry.Eleven },
        { name: "XGBoost", icon: Assets.Icons.Industry.Xgboost },
        { name: "TensorFlow", icon: Assets.Icons.Industry.Tensorflow },
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Embeddings & Search",
      tools: [
        { name: "GDPR", icon: Assets.Icons.Industry.Grpd },
        { name: "Redis", icon: Assets.Icons.Industry.Redis },
        { name: "Weaviate", icon: Assets.Icons.Industry.Weaviate },
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "LLMops",
      tools: [
        { name: "Trulens", icon: Assets.Icons.Industry.Trulens },
        { name: "W&B", icon: Assets.Icons.Industry.Wandb },
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Data Engineering & Pipelines",
      tools: [
        { name: "Spark Streaming", icon: Assets.Icons.Industry.Spark },
        { name: "Apache Airflow", icon: Assets.Icons.Industry.Airflow },
        { name: "dbt", icon: Assets.Icons.Industry.Dbt },
        { name: "Kafka", icon: Assets.Icons.Industry.Kafka },
        { name: "Snowflake", icon: Assets.Icons.Industry.Snowflake },
        { name: "BigQuery", icon: Assets.Icons.Industry.Bigquery },
        { name: "Amazon S3", icon: Assets.Icons.Industry.AmazonS3 },
        { name: "Azure", icon: Assets.Icons.Industry.Azure },
      ],
      colSpan: "lg:col-span-2", // Spans 2 columns based on visual weight or just 1 large one
    },
    {
      title: "Cloud, DevOps & CI/ CD",
      tools: [
        { name: "AWS", icon: Assets.Icons.Industry.Aws },
        { name: "CI/CD", icon: Assets.Icons.Industry.Cicd },
        { name: "Google Cloud", icon: Assets.Icons.Industry.GoogleCloud },
        { name: "Azure", icon: Assets.Icons.Industry.AzureLogo },
        { name: "Docker", icon: Assets.Icons.Industry.Docker },
        {
          name: "Terraform",
          icon: Assets.Icons.Industry.Cloud,
        },
        { name: "Devops", icon: Assets.Icons.Industry.Devops },
      ],
      colSpan: "lg:col-span-2",
    },
    {
      title: "Backend & Microservices",
      tools: [
        { name: "FastAPI", icon: Assets.Icons.Industry.Fastapi },
        { name: "Node.js", icon: Assets.Icons.Industry.Node },
        { name: "GraphQL", icon: Assets.Icons.Industry.Graphql },
        { name: "Redis", icon: Assets.Icons.Industry.Redis },
        { name: "Kafka", icon: Assets.Icons.Industry.Kafka },
      ],
      colSpan: "lg:col-span-2",
    },
    {
      title: "Frontend & UX",
      tools: [
        { name: "React", icon: Assets.Icons.Industry.React },
        { name: "Next.js", icon: Assets.Icons.Industry.Next },
        { name: "Tailwind", icon: Assets.Icons.Industry.Tailwind },
        { name: "Sass", icon: Assets.Icons.Industry.Saas },
        { name: "MUI", icon: Assets.Icons.Industry.Mui },
        { name: "Animal", icon: Assets.Icons.Industry.Animal },
        {
          name: "Redux",
          icon: Assets.Icons.Industry.Redux,
        },
      ],
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-medium font-Inter text-center mb-16 text-slate-900">
          Seamless Integration With Your Favourite Tools
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: 3 cols */}
          {stackCategories.slice(0, 3).map((category, index) => (
            <StackCard key={index} category={category} />
          ))}

          {/* Row 2: Split 2 cols (Visual shows 2 wide cards) */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {stackCategories.slice(3, 5).map((category, index) => (
              <StackCard key={index} category={category} />
            ))}
          </div>

          {/* Row 3: Split 2 cols */}
          <div className="lg:col-span-3 grid md:grid-cols-2 sm:col-span-2 gap-6">
            {stackCategories.slice(5, 7).map((category, index) => (
              <StackCard key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Card Component
const StackCard = ({ category }) => (
  <div className="bg-[#F3F2EE] rounded-2xl p-8 flex flex-col items-center h-full hover:shadow-md transition-shadow">
    {/* 1. Added 'min-h-[60px]' and 'flex items-start' 
        This ensures all titles start at the same Y-position 
        and take up the same amount of vertical space.
    */}
    <div className="w-full min-h-[50px] flex justify-center items-start">
      <h3 className="font-bold mb-8 text-sm uppercase tracking-wide opacity-80">
        {category.title}
      </h3>
    </div>

    {/* 2. Added 'flex-grow' to the tools container 
        This pushes the tools to the middle/bottom if needed 
        while the title stays locked at the top.
    */}
    <div className="flex flex-wrap justify-center gap-6 items-center flex-grow">
      {category.tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center group">
          {tool.icon ? (
            <img
              src={tool.icon}
              alt={tool.name}
              className="h-12 w-14 transition-all"
            />
          ) : (
            <span className="text-slate-600 font-semibold text-lg hover:text-slate-900 transition-colors">
              {tool.name}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
