export const ErrorFallback = ({ error, resetErrorBoundary, componentStack }) => {
    // Extract the first clean line to identify the component name
    const componentName = componentStack ? componentStack.trim().split('\n')[0].trim() : 'Unknown Component';

    return (
        <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#fff5f5' }}>
            <h2>Something went wrong.</h2>
            <p>
                <strong>Error:</strong> {error.message}
            </p>
            <p>
                <strong>Failed in:</strong> <code>{componentName}</code>
            </p>

            <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
                <summary>View Component Stack Trace</summary>
                {componentStack || 'No stack trace available.'}
            </details>

            <button
                onClick={resetErrorBoundary}
                style={{
                    marginTop: '15px',
                    cursor: 'pointer',
                    border: '2px solid red',
                    borderRadius: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    background: 'rgba(50, 50, 50, 0.1)',
                }}
            >
                Try Again
            </button>
        </div>
    );
};
