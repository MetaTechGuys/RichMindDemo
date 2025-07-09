import { Text } from '@/atoms';

export default function Copyright() {
  return (
    <footer className="bg-accent py-2 text-sm text-white">
      <div className="container mx-auto flex w-full items-center justify-between">
        <Text truncate>© 2025 Five Guys Enterprises, LLC</Text>
        <div className="inline-flex items-center gap-2 uppercase">
          <Text nowrap>Item 1</Text>
          <Text>|</Text>
          <Text>Item 2</Text>
        </div>
      </div>
    </footer>
  );
}
