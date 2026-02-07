import React from 'react';
import { Assets } from '../../assets/Asset';

const TechStack = () => {
  const stackCategories = [
    {
      title: "ML/DL",
      tools: [
        { name: "PyTorch", icon: null }, // Placeholder
        { name: "Scikit-learn", icon: null },
        { name: "XGBoost", icon: null },
        { name: "TensorFlow", icon: null }
      ],
      colSpan: "lg:col-span-1"
    },
    {
      title: "Embeddings & Search",
      tools: [
        { name: "GDPR", icon: null },
        { name: "Redis", icon: null },
        { name: "Weaviate", icon: null }
      ],
      colSpan: "lg:col-span-1"
    },
    {
      title: "LLMops",
      tools: [
        { name: "Trulens", icon: null },
        { name: "W&B", icon: null }
      ],
      colSpan: "lg:col-span-1"
    },
    {
      title: "Data Engineering & Pipelines",
      tools: [
        { name: "Spark Streaming", icon: null },
        { name: "Apache Airflow", icon: Assets.Icons.Services.ML.Apache },
        { name: "dbt", icon: null },
        { name: "Kafka", icon: null },
        { name: "Snowflake", icon: null },
        { name: "BigQuery", icon: null },
        { name: "Amazon S3", icon: Assets.Icons.Services.ML.AWS },
        { name: "Azure", icon: Assets.Icons.Services.ML.Microsoft }
      ],
      colSpan: "lg:col-span-2" // Spans 2 columns based on visual weight or just 1 large one
    },
    {
      title: "Cloud, DevOps & CI/ CD",
      tools: [
        { name: "AWS", icon: Assets.Icons.Services.ML.AWS },
        { name: "CI/CD", icon: null },
        { name: "Google Cloud", icon: null },
        { name: "Azure", icon: Assets.Icons.Services.ML.Microsoft },
        { name: "Docker", icon: null },
        { name: "Terraform", icon: null }
      ],
      colSpan: "lg:col-span-2"
    },
    {
      title: "Backend & Microservices",
      tools: [
        { name: "FastAPI", icon: null },
        { name: "Node.js", icon: null },
        { name: "GraphQL", icon: null },
        { name: "Redis", icon: null },
        { name: "Kafka", icon: null }
      ],
      colSpan: "lg:col-span-2"
    },
    {
      title: "Frontend & UX",
      tools: [
        { name: "React", icon: null },
        { name: "Next.js", icon: null },
        { name: "Tailwind", icon: null },
        { name: "Sass", icon: null },
        { name: "MUI", icon: null },
        { name: "Redux", icon: null }
      ],
      colSpan: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-slate-900">
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
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
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
  <div className={`bg-[#F3F2EE] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full hover:shadow-md transition-shadow`}>
    <h3 className="text-slate-800 font-bold mb-8 text-sm uppercase tracking-wide opacity-80">
      {category.title}
    </h3>
    <div className="flex flex-wrap justify-center gap-6 items-center">
      {category.tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center group">
          {/* If icon exists, show it, else show text fallback */}
          {tool.icon ? (
            <img src={tool.icon} alt={tool.name} className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" />
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