'use client';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import Button from '@/components/common/Button';
import { HighlightText } from '@/components/common/HighlightText';
import List from '@/components/common/List';
import ListItem from '@/components/common/ListItem';
import ListItemSkeleton from '@/components/loading/ListItemSkeleton';
import { AdditionalInfo } from '@/components/common/AdditionalInfo';

import { getUrl } from '@/lib/getUrl';
import Bio from '@/app/api/bios/bio.d';
import { ScrollDownIndicator } from '../../components/common/ScrollDownIndicator';

const BioSection: React.FC = ({}) => {
  const [bios, setBios] = useState<Bio[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const btnContainerRef = useRef<HTMLDivElement | null>(null);

  const handleLoadBio = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${getUrl()}/api/bios/${bios.length}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { bio, error } = await response.json();
      if (error) {
        throw new Error(error.message || 'Unable to load');
      }
      setBios([...bios, bio]);
    } catch (error: any) {
      toast.error(error?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (bios.length === 0) {
      return;
    }
    btnContainerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }, [bios.length]);

  return (
    <>
      <List>
        {bios.map((bio) => {
          return (
            <ListItem key={bio.id} icon={bio.icon}>
              <HighlightText>{bio.title}: </HighlightText>
              {bio.paragraph}
            </ListItem>
          );
        })}
        {isLoading && <ListItemSkeleton />}
      </List>
      <div className="flex flex-col space-y-4" ref={btnContainerRef}>
        {bios.length <= 5 ? (
          <>
            <Button onClick={() => handleLoadBio()}>Learn more...</Button>
            <AdditionalInfo
              text="This content is retrieved via an API built with"
              href="https://nextjs.org/docs/app/building-your-application/routing/router-handlers"
              hrefText="Next.js Route Handlers"
            />
          </>
        ) : (
          <ScrollDownIndicator />
        )}
      </div>
    </>
  );
};

export default BioSection;
