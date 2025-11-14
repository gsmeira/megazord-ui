export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-muted">{children}</thead>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b border-border">{children}</tr>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-2 text-left font-semibold">{children}</th>;
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-2">{children}</td>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}
