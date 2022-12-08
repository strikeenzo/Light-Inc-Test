export interface InvoiceItemProps {
  id: number;
  vendor: {
    name: string;
    image: string;
    checked: boolean;
    missing?: boolean;
  };
  description: string;
  status: {
    type: string;
    description: string;
  };
  stage: {
    color: string;
    time: string;
  };
  approver: {
    image?: string;
    name?: string;
    button?: {
      type: string;
    };
  };
  paym: {
    time: string;
  };
  paid: number;
}

export interface InvoiceTableProps {
  data: InvoiceItemProps[];
}

export interface InvoiceModalProps {
  setShowModal: (value: boolean) => void;
}
