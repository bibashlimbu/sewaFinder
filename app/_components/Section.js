function Section({ children, className }) {
  return (
    <section className={`py-10 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

export default Section;
