import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { campaignItems } from '@/lib/community-data';
import CampaignClient from './CampaignClient';

export async function generateStaticParams() {
  return campaignItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const campaign = campaignItems.find((item) => item.slug === params.slug);
  
  if (!campaign) {
    return {
      title: 'Campaign Not Found | Yuvastambh',
    };
  }

  return {
    title: `${campaign.title} | Yuvastambh Campaigns`,
    description: campaign.subtitle,
  };
}

export default function CampaignDetailPage({ params }: { params: { slug: string } }) {
  const campaign = campaignItems.find((item) => item.slug === params.slug);

  if (!campaign) {
    return (
      <div className="pt-28 min-h-screen bg-background-light dark:bg-dark-400 flex items-center">
        <Container className="text-center">
          <h1 className="heading-md mb-4 text-background-dark dark:text-white">Campaign not found</h1>
          <Link href="/campaigns" className="text-primary dark:text-accent-gold font-semibold">
            Return to campaigns
          </Link>
        </Container>
      </div>
    );
  }

  const related = campaignItems.filter((item) => item.slug !== campaign.slug).slice(0, 3);

  return <CampaignClient campaign={campaign} related={related} />;
}
