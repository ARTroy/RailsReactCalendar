rails_env = ENV['RAILS_ENV']
threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }

if(rails_env == "production")

    shared_dir = "/home/web1/RailsReactCalendar"
    #stdout_redirect "#{shared_dir}/log/puma.stdout.log", "#{shared_dir}/log/puma.s$

    pidfile "#{shared_dir}/tmp/pids/puma.pid"
    state_path "#{shared_dir}/tmp/pids/puma.state"

    workers ENV["PUMA_WORKERS"]

    preload_app!

    # Set up socket location
    bind "unix://#{shared_dir}/tmp/sockets/puma.sock"

    on_worker_boot do
        ActiveSupport.on_load(:active_record) do
            ActiveRecord::Base.establish_connection
        end
    end

    before_fork do
        ActiveRecord::Base.connection_pool.disconnect!
    end
else 
    port ENV.fetch("PORT") { 3000 }
end
