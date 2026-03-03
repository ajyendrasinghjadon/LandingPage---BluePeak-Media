
const Container = ({ children, className = "" }) => {
    return (
        <div className={`max-w-[1200px] mx-auto px-5 w-full box-border ${className}`}>
            {children}
        </div>
    );
};

export default Container;
