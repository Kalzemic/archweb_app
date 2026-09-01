import '@/Styles/Service.css'

export default async function Service({ params }: { params: Promise<{ service: string }> }) {
    const { service } = await params;
    return (
        <div>
            <img className='service-image' src={`/services/${service}.png`} alt={`${service} image`} />
        </div>
    );
}