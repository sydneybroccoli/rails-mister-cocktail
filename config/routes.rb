Rails.application.routes.draw do
  # ROOT
  root to: 'cocktails#home'
  # COCKTAILS (index, show, new, create, destroy)
  resources :cocktails do
    # INGREDIENTS (nothing)
    # DOSE (new, create, delete)
    resources :doses, only: [:new, :create, :destroy]
  end
  # resources :doses, only: :destroy

  # get 'cocktails/:id/new_dose', as: :new_dose, to: 'cocktails#new_dose'
end
