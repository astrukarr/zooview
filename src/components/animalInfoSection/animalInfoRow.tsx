type Props = {
  label: string;
  value: string | number;
};

export default function InfoRow({ label, value }: Props) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <span className="flex-grow border-t border-dotted border-gray-300 mt-2"></span>
      <span className="ml-2 font-medium">{value}</span>
    </div>
  );
}
