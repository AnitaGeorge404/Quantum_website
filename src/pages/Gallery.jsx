import ImageGallery from '../components/gallery/ImageGallery';
import EventsSection from '../components/gallery/EventsSection';

export default function Gallery() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <ImageGallery />
      <EventsSection />
    </div>
  );
}
