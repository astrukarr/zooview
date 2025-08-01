import InfoRow from "./animalInfoRow";

type Props = {
  size: string;
  preyCount: number;
  predatorCount: number;
};

export default function AnimalInfoSection({
  size,
  preyCount,
  predatorCount,
}: Props) {
  return (
    <div className="space-y-2 text-sm text-gray-800">
      <InfoRow label="Size" value={size} />
      <InfoRow label="Prey" value={preyCount} />
      <InfoRow label="Predators" value={predatorCount} />
    </div>
  );
}
