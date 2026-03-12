import React from 'react'
import { Assets } from '../../assets/Asset'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function HealthCare() {
  const { t } = useTranslation()

  return (
    <section className="py-14 bg-white overflow-hidden px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("industry_sections.solutions_delivered.title")}
          </h2>
          <p className="text-slate-600 text-lg">
            {t("industry_sections.solutions_delivered.subtitle")}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Card */}
          <div className="group bg-white rounded-[12px] border border-1 border-black/50 overflow-hidden hover:shadow-lg p-2 max-w-md mx-auto lg:mx-0">
            <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={Assets.Images.Industries.Dashboard} alt="" />
              </div>
            </div>
            <div className="p-6 font-semibold text-xl">
              <h3 className="font-bold text-black mb-2 leading-tight">
                {t("case_studies.healthcare_industry.card_title")}
              </h3>
              <p className="text-black mb-6">
                {t("case_studies.healthcare_industry.card_desc")}
              </p>
              <Link to="/case-study/healthcare" className="px-8 py-3 bg-[#013934] text-white rounded-full text-sm font-Inter hover:bg-[#002a22] transition-colors">
                {t("case_studies.common.view_case_studies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthCare
