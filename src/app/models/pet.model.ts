export enum PetStatuses {
  Available = 'available',
  Pending = 'pending',
  Sold = 'sold',
}

export interface Pet {
  id: string | null;
  name: string;
  status: PetStatuses;
}
