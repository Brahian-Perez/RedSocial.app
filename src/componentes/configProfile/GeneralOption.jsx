import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import { useApi } from '../../hooks/useApi'
import { api } from '../../services/api'

function GeneralOption() {
    const { usuario } = useAuth()
    const { datos: perfil, cargando, error } = useApi(`/usuarios/${usuario.id}`)

    return (
        <div>
            <div id="General" className="w3-container tab w3-padding-24">
                <h4>Información personal</h4>
                {cargando && <p className="w3-opacity">Cargando...</p>}
                {error && <p className="w3-text-red">{error}</p>}
                {perfil && <FormularioPerfil perfil={perfil} />}
            </div>
        </div>
    )
}

// Se muestra cuando el perfil ya cargó, así los campos arrancan con sus datos
function FormularioPerfil({ perfil }) {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
        defaultValues: {
            biografia: perfil.biografia || '',
            ciudad: perfil.ciudad || '',
            genero: perfil.genero || '',
        }
    })

    const guardar = async (datos) => {
        try {
            await api(`/usuarios/${perfil.id}`, { metodo: 'PUT', datos })
        } catch (e) {
            setError('root.servidor', { message: e.message })
        }
    }

    return (
        <form onSubmit={handleSubmit(guardar)}>
            <div className="w3-section">
                <label>Nombre</label>
                <input className="w3-input w3-border w3-round w3-light-grey" type="text" value={perfil.nombre} disabled />
            </div>
            <div className="w3-section">
                <label>Correo electrónico</label>
                <input className="w3-input w3-border w3-round w3-light-grey" type="email" value={perfil.email} disabled />
            </div>
            <div className="w3-section">
                <label htmlFor="biografia">Biografía</label>
                <textarea id="biografia" className="w3-input w3-border w3-round" rows="3" {...register('biografia')}></textarea>
            </div>
            <div className="w3-section">
                <label htmlFor="ciudad">Ciudad</label>
                <input id="ciudad" className="w3-input w3-border w3-round" type="text" {...register('ciudad')} />
            </div>
            <div className="w3-section">
                <label htmlFor="genero">Género</label>
                <select id="genero" className="w3-select w3-border w3-round" {...register('genero')}>
                    <option value="">Sin especificar</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            {errors.root?.servidor && <p className="w3-text-red">{errors.root.servidor.message}</p>}
            {isSubmitSuccessful && !errors.root && <p className="w3-text-green">Cambios guardados.</p>}

            <button type="submit" disabled={isSubmitting} className="w3-button w3-theme-d2 w3-round">
                <i className="fa fa-save" style={{ marginRight: '8px' }}></i>
                {isSubmitting ? 'Guardando...' : 'Guardar cambios'}
            </button>
        </form>
    )
}

export default GeneralOption
