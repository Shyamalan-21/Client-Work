import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { silkCategories, getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/categories/CategoryPageTemplate";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return silkCategories.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    return {
      title: "Category Not Found | Sri Maruthi Old Silk Buyer",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `/what-we-buy/${category.slug}`,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      images: [
        {
          url: category.image,
          width: 800,
          height: 600,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  return <CategoryPageTemplate category={category} />;
}
